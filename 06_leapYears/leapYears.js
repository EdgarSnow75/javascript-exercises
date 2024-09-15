const leapYears = function (year) {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      return year % 400 == 0;
    } else {
      return true;
    }
  }
  return false;
};

leapYears(1997);
// Do not edit below this line
module.exports = leapYears;
