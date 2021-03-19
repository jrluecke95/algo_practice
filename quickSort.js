let arr = [5, 4, 3, 2, 1];
//sets up swap function
function swap(array, leftIndex, rightIndex) {
  let temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
}

function partition(arr, left, right) {
  //selects pivot as middle of array
  let pivot = arr[Math.floor((right + left)/2)];
  //assigning left and right index to variables to manipulate later on
  let i = left;
  let j = right;
  // checking for when i is equal to j - breaking loop when it is
  while (i <= j) {
    // if the value coming from the left is less than our pivot number we add one to i - bringing our left index closer to pivot
    // checks arr value relative to pilot and increases index when less or greater (left or right respectively)
    // this lets us discover the pivot  index position (how??) - for every number less than pivot we increase the index and return that so it is the index of pivot at the end of this function
    while (arr[i] < pivot) {
      i++;
    }
    // if the value coming from the right is greater than ou pivto we add one to j - bringing our right index closer to pivot
    while (arr[j] > pivot) {
      j--;
    }
    // checks to see if i is less than j and if so executes code 
    // 
    if (i <= j) {
      //swaps i and j and then increases i and decreases j so that while loop is broken out of
      // final i++ after swap gives pivot its final position?
      // when i is less than j by only 1 this will kill the while loop above
      // it works because it does and finds the true index of our initial pivot
      swap(arr, i, j);
      i++;
      j--;
    }
  return i;
  }
}

function quickSort(arr, left, right) {
  let index;
  // if the arrays are not broken down into smallest pieces enter code below
  if (arr.length > 1) {
    // setting index of pivot equal to result of partition
    index = partition(arr, left, right);
    // sorting the left side 
    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }
    // sorting the right side
    if (index < right) {
      quickSort(arr, index, right);
    }
  }
  return arr;
}

let sortedArray = quickSort(arr, 0, arr.length - 1);
console.log(sortedArray);