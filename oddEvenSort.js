let isSorted = false;
let arr = [5, 4, 3, 2 ,1]
// settting up base while loop
// will break when if statement is not triggered upon either for loop
while (isSorted === false) {
  isSorted = true;
  // sorting even indexes and their neighbor
  for (let i = 0; i < arr.length - 1; i+=2) {
    if (arr[i + 1] < arr[i]) {
      let temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
      isSorted = false;
    }
  }
  // sorting odd indexes and their neighbors
  for (let j = 1; j < arr.length - 1; j += 2) {
    if (arr[j + 1] < arr[j]) {
      let temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
      isSorted = false;
    }
  }
}

console.log(arr);