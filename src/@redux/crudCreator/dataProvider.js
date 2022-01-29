import keyBy from 'lodash/keyBy';
import omit from 'lodash/omit';
import isEmpty from 'lodash/isEmpty';
import { getValidData } from '../../utils/tools';

export const PRIMARY_KEY = 'id';

export const REQUEST_TYPE = {
  GET_ALL: 'GET_ALL',
  GET_BY_ID: 'GET_BY_ID',
  EDIT: 'EDIT',
  CREATE: 'CREATE',
  DELETE: 'DELETE',
};

const convertQueryString = (params, isFilter) => Object.keys(params).map((key) => `${isFilter ? 'filter' : encodeURIComponent(key)}=${encodeURIComponent(params[key])}`).join('&');

const convertJoin = (join = []) => join.map(key => `join=${key}`).join('&')

export const convertRequestParams = (type, params) => {
  const { filter, join = [], ...restParams } = params || {}
  
  const formatedParams = getValidData({
    ...restParams,
    count: undefined,
    pageSize: undefined,
    page: undefined,
    // orderBy: getValidData(restParams)?.orderBy || '-createdAt',
  });
  const validFilter = getValidData(filter, true);
  switch (type) {
    case 'GET_ALL':
      return `?${convertQueryString(getValidData(formatedParams))}${
        !isEmpty(validFilter) ? `&${convertQueryString(validFilter, true)}` : ''
      }${
        !isEmpty(join) ? `&${convertJoin(join)}` : ''
      }`;
    case 'GET_BY_ID':
      return {
        ...omit(params, ['id']),
      };
    case 'EDIT':
      return getValidData(omit(params, 'id'));
    case 'CREATE':
      return getValidData(params);
    case 'DELETE':
    default:
      return {};
  }
};

export const convertResponseData = (
  type,
  response,
  options = { primaryKey: PRIMARY_KEY },
) => {
  switch (type) {
    case 'GET_ALL':
      // eslint-disable-next-line
      const list = Array.isArray(response) ? response : response.data;
      return {
        data: keyBy(
          list.map((data) => ({
            ...data,
            [options.primaryKey]: data[options.primaryKey || PRIMARY_KEY],
            backupId: data[PRIMARY_KEY],
          })),
          options.primaryKey || PRIMARY_KEY,
        ),
        ids: list.map((data) => data[options.primaryKey || PRIMARY_KEY]),
        total: response?.total || list.length,
      };
    case 'GET_BY_ID':
    case 'CREATE':
      // eslint-disable-next-line
      return response
        ? Array.isArray(response)
          ? {
              ...response[0],
              [options.primaryKey]:
                response[0][options.primaryKey || PRIMARY_KEY],
            }
          : {
              ...response,
              [options.primaryKey]: response[options.primaryKey || PRIMARY_KEY],
            }
        : null;
    case 'EDIT':
      return response && response ? { ...response } : null;
    case 'DELETE':
    default:
      return response;
  }
};
