/* eslint-disable import/prefer-default-export */
const dayOfWeekMap = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthMap = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const formatNumber = (number) => (number < 10 ? `0${number}` : number);

const formatTime = (date) =>
  date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

const formatDate = (date) =>
  date.toLocaleDateString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

const formatDateToString = (date) =>
  `${date.getFullYear()}-${formatNumber(date.getMonth() + 1)}-${formatNumber(
    date.getDate()
  )}`;

const formatDateTimeToString = (date) =>
  `${formatDate(date)} ${formatTime(date)}`;

const formatTimeRangeToString = (startDateTime, endDateTime) => {
  let timeRange = "";
  timeRange += formatTime(startDateTime);
  if (endDateTime) {
    timeRange += ` - ${formatTime(endDateTime)}`;
  }

  return timeRange;
};

const formatDateTimeRangeToString = (startDateTime, endDateTime) => {
  let dateRange = "";
  dateRange += formatDateTimeToString(startDateTime);
  if (endDateTime) {
    dateRange += ` - ${formatDateTimeToString(endDateTime)}`;
  }

  return dateRange;
};

export {
  formatDateToString,
  formatDateTimeToString,
  formatTime,
  formatDateTimeRangeToString,
  formatTimeRangeToString,
};
