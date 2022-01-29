import { createApi, retry } from '@reduxjs/toolkit/query/react';
import { delApi, getAllApi, getDataByIdApi, patchApi, postApi } from 'api/crud';
import { setInitHeader } from 'utils/request';
import { convertRequestParams, REQUEST_TYPE } from './dataProvider';

const upperFirstChar = (str) => str[0].toUpperCase() + str.substring(1);

export const rtkCreator = (resource, customApiResource) => {
  const baseUrl = customApiResource || resource;
  return createApi({
    reducerPath: `${resource}Api`,
    tagTypes: [resource],
    baseQuery: retry(
      async (payload) => {
        try {
          setInitHeader();
          const requestParams = convertRequestParams(
            payload.type,
            payload.data,
          );
          switch (payload.type) {
            case REQUEST_TYPE.GET_ALL:
              return {
                data: await getAllApi(baseUrl, requestParams),
              };
            case REQUEST_TYPE.GET_BY_ID:
              return {
                data: await getDataByIdApi(
                  baseUrl,
                  payload.data.id,
                  requestParams,
                ),
              };
            case REQUEST_TYPE.CREATE:
              return {
                data: await postApi(baseUrl, requestParams),
              };
            case REQUEST_TYPE.EDIT:
              return {
                data: await patchApi(baseUrl, payload.data.id, requestParams),
              };
            case REQUEST_TYPE.DELETE:
              await delApi(baseUrl, payload.data.id);
              return {
                data: payload.data,
              };
            default:
              return {};
          }
        } catch (error) {
          console.log(error);
          return error;
        }
      },
      { maxRetries: 0 },
    ),
    endpoints: (builder) => ({
      [`getAll${upperFirstChar(resource)}`]: builder.query({
        query: (payload = { data: {}, options: {} }) => ({
          ...payload,
          type: REQUEST_TYPE.GET_ALL,
        }),
        providesTags: (result) =>
          result?.data
            ? [
                ...result.data.map(({ id }) => ({ type: resource, id })),
                { type: resource, id: 'LIST' },
              ]
            : [{ type: resource, id: 'LIST' }],
      }),
      [`getById${upperFirstChar(resource)}`]: builder.query({
        query: (payload = { data: {}, options: {} }) => ({
          ...payload,
          type: REQUEST_TYPE.GET_BY_ID,
        }),
        extraOptions: { maxRetries: 1 },
      }),
      [`create${upperFirstChar(resource)}`]: builder.mutation({
        query: (payload = { data: {}, options: {} }) => ({
          ...payload,
          method: 'POST',
          type: REQUEST_TYPE.CREATE,
        }),
        invalidatesTags: [{ type: resource, id: 'LIST' }],
      }),
      [`edit${upperFirstChar(resource)}`]: builder.mutation({
        query: (payload = { data: {}, options: {} }) => ({
          ...payload,
          method: 'PATCH',
          type: REQUEST_TYPE.EDIT,
        }),
        invalidatesTags: (result, error, { id }) => [{ type: resource, id }],
      }),
      [`del${upperFirstChar(resource)}`]: builder.mutation({
        query: (payload = { data: {}, options: {} }) => ({
          ...payload,
          method: 'DELETE',
          type: REQUEST_TYPE.DELETE,
        }),
        invalidatesTags: (result, error, id) => [{ type: resource, id }],
      }),
    }),
  });
};
