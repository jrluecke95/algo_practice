// loops through the array straight through and finds the smallest number in the array and places it in the array 
// starting at 0 and then moving forward each index based on the most outer for loop
// outer for loop keeps track of which index the number needs to be placed at
// inner loop finds the lowerst number in the array

function selectionSort(inputArr) {
  let n = inputArr.length;

  for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (inputArr[j] < inputArr[min]) {
        min = j;
      }
    }
    if (min != i) {
      // Swapping the elements
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
    }
  }
  return inputArr;
}
