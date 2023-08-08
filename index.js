const addDays = require("date-fns/addDays");
let days = 3;
function dateAfterXdays(days) {
  return (result = addDays(new Date(2020, 07, 22), days));
}
console.log(dateAfterXdays(days));
