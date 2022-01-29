import moment from 'dayjs';

const relativeTime = require('dayjs/plugin/relativeTime');

moment.extend(relativeTime);

export const getThumbnail = (data) =>
  data?.gallery?.filter((e) => e?.type === 'EXTERIOR')[0]?.asset_path ||
  data?.galleries?.[0]?.asset_path ||
  '/images/default-thumnail.png';

export const getDailyWorkLabel = (data) => {
  const diff = moment().diff(moment(data.createdAt), 'day');
  if (!diff) return 'daysOfWeek.today';
  if (diff === 1) return 'daysOfWeek.yesterday';
  return moment(data.createdAt).fromNow();
};
