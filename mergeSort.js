let testArr = [5, 4, 3, 2, 1];

function merge(left, right) {
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [ ...arr, ...left, ...right];
}

function mergeSort(array) {
  let middle = array.length / 2;
  if (array.length < 2) {
    return array;
  }
  const left = array.splice(0, middle);
  return merge(mergeSort(left), mergeSort(array))
}

console.log(mergeSort(testArr))