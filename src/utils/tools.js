/* eslint-disable import/no-extraneous-dependencies */
import moment from 'dayjs';
// import DeviceInfo from 'react-native-device-info';
import isEmpty from 'lodash/isEmpty';
import debounce from 'lodash/debounce';
import values from 'lodash/values';
import reduce from 'lodash/reduce';
import { SEO_VAR } from 'configs/seo';
import { i18n } from 'next-i18next';
import { getImageUrl as getImageUrlS3 } from 'components/Image';

const relativeTime = require('dayjs/plugin/relativeTime');

moment.extend(relativeTime);

export const getImageShare = (thumbnail) =>
  thumbnail ? getImageUrlS3(thumbnail, 1400) : SEO_VAR.image;

export const trimCommaString = (text) =>
  // eslint-disable-next-line
  text ? text.replace(/(^\,+|\,+$)/gm, '') : null;

export const formatMoney = (num, digits = 3, currency = '') => {
  if (!num) return `0 ${currency}`;
  if (Number.isNaN(num)) return `0 ${currency}`;
  const re = `\\B(?=(\\d{${digits}})+(?!\\d))`;
  return `${String(num).replace(new RegExp(re, 'g'), ',')} ${currency}`;
};

export const formatDateFromNow = (date) => {
  if (moment().isAfter(date)) {
    return moment(date).fromNow();
  }
  return 'Just now';
};

export const formatTimeOpening = (time) =>
  time ? moment(time).format('HH:mm') : '';

export const formatDateTimeEvent = (time) =>
  time ? moment(time).format('MMMM Do, YYYY') : null;

const searchAsyncRequest = (func, callback) => (data) => {
  func(data).then((res) => callback(res));
};

export const searchAsync = (func, callback) => {
  let task = null;
  if (task) {
    task.cancel();
  }
  task = debounce(searchAsyncRequest(func, callback), 500, {});
  return task;
};

// TODO: hasNotch
// export const hasNotch = DeviceInfo.hasNotch();

const getValidDataOfObj = (obj, isFilter) => {
  const validData = reduce(
    obj,
    (result, value, key) => {
      if (Array.isArray(value)) {
        return value.length > 0 ? { ...result, [key]: value } : result;
      }
      if (typeof value === 'object' && !isEmpty(value)) {
        const formatChildValue = getValidDataOfObj(value);
        return !isEmpty(formatChildValue)
          ? { ...result, [key]: formatChildValue }
          : result;
      }

      if (value || value === false || value === 0) {
        // eslint-disable-next-line
        result[key] = value;
        return { ...result, [key]: value };
      }

      if (value === '' && !isFilter) {
        // eslint-disable-next-line
        result[key] = ' ';
      }
      return result;
    },
    {},
  );
  return validData;
};

export const convertObjToSearchStr = (params) =>
  Object.keys(params)
    .map((key) =>
      params[key] !== undefined && params[key] !== null
        ? `${encodeURIComponent(key)}=${params[key]}`
        : '',
    )
    .filter((data) => data !== '')
    .join('&');

export const getValidData = (filter, isFilter) =>
  getValidDataOfObj(filter, isFilter) || {};

export const formatCuisines = (cuisines, data) =>
  data
    ?.map((e) => cuisines[e]?.name)
    .join(',')
    .toUpperCase();

export function Haversine_distance(lat1, lon1, lat2, lon2) {
  if (typeof Number.prototype.toRad === 'undefined') {
    // eslint-disable-next-line
    Number.prototype.toRad = function () {
      return (this * Math.PI) / 180;
    };
  }
  const R = 6371; // in km
  const x1 = lat2 - lat1;
  const dLat = x1.toRad();
  const x2 = lon2 - lon1;
  const dLon = x2.toRad();
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1.toRad()) *
      Math.cos(lat2.toRad()) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d * 1.0;
}

export const getImageUrl = (image) =>
  image && (image.indexOf('http') > -1 || image.indexOf('https') > -1)
    ? image
    : `${process.env.NEXT_PUBLIC_PHOTO_HOST}/${image}`;

export const changeStringNoSign = (alias) => {
  if (!alias) return null;
  let str = alias;
  str = str?.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ {2}|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  // str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ {2}|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ|ð/g, 'd');
  return str;
};

export const formatI18nData = (data) =>
  typeof data === 'string'
    ? data
    : data?.[i18n.language] || values(data).find((e) => !!e);

export const convertToI18nData = text => ({
  en: text,
  vi: text,
})
