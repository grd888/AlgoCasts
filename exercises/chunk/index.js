// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution 1
function chunk(array, size) {
  let result = [];
  for (let i = 0; i < array.length; i += size) {
    const slice = array.slice(i, i + size);
    result.push(slice);
  }
  return result;
}

// Solution 2
// function chunk(array, size) {
//   let result = [];
//   while(array.length > 0) {
//       const slice = [];
//       for(let i = 0; i < size; i++) {
//         if(array.length > 0) slice.push(array.shift());
//       }
//       result.push(slice);
//   }
//   return result;
// }
module.exports = chunk;
