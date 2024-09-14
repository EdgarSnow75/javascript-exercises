/* Create a variable to store the final result
   First check if the string includes space or comma
   Assign an array to the split string using space or comma as separators
   Reverse the elements of the array
   Run a callback function to reverse each characters of the element by looping through them
   Save the final array as string to the result variable  */
const reverseString = function (string) {
  let changedString = "";
  const splitArray = string.split(" ");
  if (splitArray.length === 1) {
    changedString = string.split("");
    changedString.reverse();
    changedString = changedString.join("");
    console.log(changedString);
  } else if (splitArray.length > 1) {
    splitArray.reverse();
    for (let i = 0; i < splitArray.length; i++) {
      const itemArray = splitArray[i].split("");
      itemArray.reverse();
      splitArray[i] = itemArray.join("");
    }
    changedString = splitArray.join(" ");
  }
  return changedString;
};

// Shorter way is to return string.split("").reverse().join("")
// Do not edit below this line
module.exports = reverseString;
