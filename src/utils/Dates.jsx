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

const formatDateToString = (date) =>
  `${date.getFullYear()}-${formatNumber(date.getMonth() + 1)}-${formatNumber(
    date.getDate()
  )}`;

const formatDateTimeToString = (date) => {
  let dateTime = "";
  dateTime += `${dayOfWeekMap[date.getDay()]}, `;
  dateTime += `${monthMap[date.getMonth()]} `;
  dateTime += `${date.getDate()}, `;
  dateTime += formatTime(date);

  return dateTime;
};

const formatTimeRangeToString = (startDateTime, endDateTime) => {
  let dateRange = "";
  dateRange += formatTime(startDateTime);
  if (endDateTime) {
    dateRange += ` - ${formatTime(endDateTime)}`;
  }

  return dateRange;
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
