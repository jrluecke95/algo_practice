let arr = [5, 2, 4, 3, 2, 1, 5];
// setting our while statement up and index to traverse array
let swapped = true;
let tIndex = 0;
// running until array is sorted (if statement isn't triggered)
while (swapped === true) {
  // setting swap to false to break while loop for when if statement is not run
  swapped = false;
  // the initial traversing up the array and sorting while doing so
  while (tIndex < arr.length) {
    if (arr[tIndex + 1] < arr[tIndex]) {
      let temp = arr[tIndex + 1];
      arr[tIndex + 1] = arr[tIndex];
      arr[tIndex] = temp;
      swapped = true;
    }
    tIndex++;
  }
  // going back down the array and sorting while doing so
  while (tIndex > 0) {
    if (arr[tIndex] < arr[tIndex - 1]) {
      temp = arr[tIndex - 1];
      arr[tIndex - 1] = arr[tIndex];
      arr[tIndex] = temp;
      swapped = true;
    }
    tIndex--;
  }
}
console.log(arr)