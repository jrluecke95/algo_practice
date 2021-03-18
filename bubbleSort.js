let array = [1, 0 , 3, 5, 4];

let swapped = true;
let tIndex = 0;

while (swapped === true) {
  tIndex = 0;
  while (tIndex < array.length - 1) {
    if (array[tIndex + 1] < array[tIndex]) {
      let temp = array[tIndex + 1];
      array[tIndex + 1] = array[tIndex];
      array[tIndex] = temp;
      swapped === true;
    }
    tIndex++;
  }
  swapped = false;
}

console.log(array)