const addDays = require("date-fns/addDays");

const getDate = (days) => {
  const newDate = addDays(new Date(2020, 07, 22), days);
  return `${newDate.getDate() - 1}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};
module.exports = getDate;
