import { DATE_FORMAT } from 'configs/constants';
import moment from 'dayjs';
import { Cookies } from 'react-cookie';

const customParseFormat = require('dayjs/plugin/customParseFormat');

moment.extend(customParseFormat);

const STORAGE_KEY = 'session-token';

export function getToken(key) {
  const cookies = new Cookies();
  return cookies.get(key || STORAGE_KEY);
}

export function setToken(token, key) {
  const cookies = new Cookies();
  cookies.set(key || STORAGE_KEY, token);
}

export function deleteToken(key) {
  const cookies = new Cookies();
  cookies.remove(key || STORAGE_KEY);
}

export const uuidv4 = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // eslint-disable-next-line
    const r = (Math.random() * 16) | 0;
    // eslint-disable-next-line
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

export const formatDate = (date, formatType = DATE_FORMAT) =>
  moment(date).format(formatType);

export const round10 = (number) => Math.round(number * 10) / 10;

export const formatWorkingTime = (time) => ({
  monday: {
    isOpen: !!time?.includes('workingTimeOnWeek'),
    openTime: 0,
    closeTime: 0,
  },
  tuesday: {
    isOpen: !!time?.includes('workingTimeOnWeek'),
    openTime: 0,
    closeTime: 0,
  },
  wednesday: {
    isOpen: !!time?.includes('workingTimeOnWeek'),
    openTime: 0,
    closeTime: 0,
  },
  thursday: {
    isOpen: !!time?.includes('workingTimeOnWeek'),
    openTime: 0,
    closeTime: 0,
  },
  friday: {
    isOpen: !!time?.includes('workingTimeOnWeek'),
    openTime: 0,
    closeTime: 0,
  },
  saturday: {
    isOpen: !!time?.includes('saturday'),
    openTime: 0,
    closeTime: 0,
  },
  sunday: {
    isOpen: !!time?.includes('sunday'),
    openTime: 0,
    closeTime: 0,
  },
});

export const formatWorkingTimeDisplay = (time = {}) => {
  const output = [];
  Object.keys(time).forEach((key) => {
    if (time[key].isOpen && ['sunday', 'saturday'].includes(key)) {
      output.push(key);
    }
    if (time[key].isOpen && key === 'monday') {
      output.push('workingTimeOnWeek');
    }
  });
  return output;
};
