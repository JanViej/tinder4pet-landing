import flatten from 'lodash/flatten';
import { get, post, put, del, patch } from './utils';

export async function getAllApi(resource, data) {
  return get(`/${resource}${data || ''}`);
}

export async function getFullStaticDataApi(resource) {
  const firstLoad = await get(`/${resource}?fields=id&fields=id&offset=0`);
  const urls = [];
  if (firstLoad.total > 10) {
    for (let i = 10; i < firstLoad.total; i += 10) {
      urls.push(get(`/${resource}?fields=id&fields=id&offset=${i}`));
    }
  }

  const data = await Promise.all(urls);
  return flatten([firstLoad.data, ...data.map((e) => e.data)]);
}

export async function getDataByIdApi(resource, id, data) {
  return get(`/${resource}/${id}`, data);
}

export async function delApi(resource, id) {
  if (id) {
    return del(`/${resource}/${id}`);
  }
  return del(`/${resource}`);
}

export async function postApi(resource, data) {
  return post(`/${resource}`, data);
}

export async function putApi(resource, id, data) {
  return put(`/${resource}/${id}`, data);
}

export async function patchApi(resource, id, data) {
  return patch(`/${resource}/${id}`, data);
}
