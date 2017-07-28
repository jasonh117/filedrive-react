import moment from 'moment';

const k = 1000;
const decimals = 2;
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

const bytes = bytes => {
  if (bytes === 0) return '0 Bytes';
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
}

const datetime = dt => {
  const datetime = moment(dt);
  if (datetime.isSame(moment(), 'day')) {
    return datetime.format('LT');
  }
  return datetime.format('lll')
}

export default {
  bytes,
  datetime
}