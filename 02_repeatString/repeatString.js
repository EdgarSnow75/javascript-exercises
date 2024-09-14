const repeatString = function (string, num) {
  let result = "";
  if (num < 0) {
    result = "ERROR";
    return result;
  }
  for (let i = 0; i < num; i++) {
    result += string;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
