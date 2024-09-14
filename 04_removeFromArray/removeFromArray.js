/* Use Rest Parameters to accept optional arguments. The first argument should be the array
Use the variable args to store the optional arguments
Loop through each element of the array
   In each iteration, loop through all the args elements to check if the current iteration is equal to one of the args elements
   If its equal, remove the element from the original array
Return the Original Array */

const removeFromArray = function (array, ...args) {
  for (let keyword of args) {
    for (let i = 0; i < array.length; i++) {
      let currentElement = array[i];
      if (keyword === currentElement) {
        array.splice(i, 1);
        //This is bad
        i--;
      }
    }
  }
  return array;
};

// A much better way is
// const removeFromArray = function (array, ...args) {
//      Only include items in the array that are not included in the arguments object
//    return array.filter(item => !args.includes(item))
//}
// Do not edit below this line
module.exports = removeFromArray;
