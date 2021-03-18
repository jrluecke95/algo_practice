let arr = [1, 2, 3, 4, 5];

function swap(array, leftIndex, rightIndex) {
  let temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
}

function partition(arr, left, right) {
  let pivot = arr[Math.floor((right + left)/2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if ( i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  return i;
  }
}

function quickSort(arr, left, right) {
  let index;
  if (arr.length > 1) {
    index = partition(arr, left, right);
    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }
    if (index < right) {
      quickSort(arr, index, right);
    }
  }
  return arr;
}

let sortedArray = quickSort(arr, 0, arr.length - 1);
console.log(sortedArray);