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

const getTime = (date) => {
  let dateTime = "";
  const hour = date.getHours();
  if (hour >= 12) {
    dateTime += `${hour === 12 ? hour : hour - 12} `;
    dateTime += "PM";
  } else {
    dateTime += `${hour === 0 ? hour + 12 : hour} `;
    dateTime += "AM";
  }

  return dateTime;
};

const formatDateToString = (date) =>
  `${date.getFullYear()}-${formatNumber(date.getMonth() + 1)}-${formatNumber(
    date.getDate()
  )}`;

const formatDateTimeToString = (date) => {
  let dateTime = "";
  dateTime += `${dayOfWeekMap[date.getDay()]}, `;
  dateTime += `${monthMap[date.getMonth()]} `;
  dateTime += `${date.getDate()}, `;
  dateTime += getTime(date);

  return dateTime;
};

const formatDateTimeRangeToString = (startDateTime, endDateTime) => {
  let dateRange = "";
  dateRange += formatDateTimeToString(startDateTime);
  if (endDateTime) {
    dateRange += `- ${formatDateTimeToString(endDateTime)}`;
  }

  return dateRange;
};

export {
  formatDateToString,
  formatDateTimeToString,
  getTime,
  formatDateTimeRangeToString,
};
