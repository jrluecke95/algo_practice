let arr = [5, 2, 4, 3, 2, 1, 5];

let swapped = true;
let tIndex = 0;

while (swapped === true) {
  swapped = false;
  while (tIndex < arr.length) {
    if (arr[tIndex + 1] < arr[tIndex]) {
      let temp = arr[tIndex + 1];
      arr[tIndex + 1] = arr[tIndex];
      arr[tIndex] = temp;
      swapped = true;
    }
    tIndex++;
  }
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