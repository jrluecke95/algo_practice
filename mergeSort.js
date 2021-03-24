let testArr = [5, 4, 3, 2, 1];
// setting up merge function
function merge(left, right) {
  let arr = [];
  // loop will run while the left and right array are 1 or more
  while (left.length && right.length) {
    // if the first element of left array is less than right push it onto our new array
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      // otherwise push the right value onto the array
      arr.push(right.shift());
    }
  }
  // retur sorted array first and then left and right
  return [ ...arr, ...left, ...right];
}

function mergeSort(array) {
  // finds middle of array
  let middle = array.length / 2;
  // once array length is equal to 1 all recrusive calls will return and sort
  if (array.length < 2) {
    return array;
  }
  // creates left half of the array
  const left = array.splice(0, middle);
  // recursive call that keeps calling arrays that have been havled so that they eventually meet base case
  return merge(mergeSort(left), mergeSort(array))
}

console.log(mergeSort(testArr))