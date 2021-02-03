/* eslint-disable import/prefer-default-export */
const formatNumber = (number) => (number < 10 ? `0${number}` : number);

const formatDate = (date) =>
  `${date.getFullYear()}-${formatNumber(date.getMonth() + 1)}-${formatNumber(
    date.getDate()
  )}`;

export { formatDate };
