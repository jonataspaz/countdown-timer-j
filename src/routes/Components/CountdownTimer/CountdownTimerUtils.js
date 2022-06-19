import dayjs from 'dayjs';

export function getRemainingTimeUntilMsTimestamp(timestampMs) {
  const timestampDayjs = dayjs(timestampMs);
  const nowDayjs = dayjs();
  if (timestampDayjs.isBefore(nowDayjs)) {
    return {
      seconds: '00',
      minutes: '00',
      hours: '00',
      days: '00',
    };
  }
  return {
    seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
    minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
    hours: getRemainingHours(nowDayjs, timestampDayjs),
    days: getRemainingDays(nowDayjs, timestampDayjs),
  };
}

function getRemainingSeconds(nowDayjs, timestampDayjs) {
  const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
  if (seconds < 10) {
    return `0${seconds}`;
  }
  return seconds;
}

function getRemainingMinutes(nowDayjs, timestampDayjs) {
  const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
  if (minutes < 10) {
    return `0${minutes}`;
  }
  return minutes;
}

function getRemainingHours(nowDayjs, timestampDayjs) {
  const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
  if (hours < 10) {
    return `0${hours}`;
  }
  return hours;
}

function getRemainingDays(nowDayjs, timestampDayjs) {
  const days = timestampDayjs.diff(nowDayjs, 'days');
  if (days < 10) {
    return `0${days}`;
  }
  return days;
}
