function cycleSort(array) {
  for (let currIndex = 0; currIndex < array.length - 1; currIndex++) {
    let item = array[currIndex];
    let copyCurrIndex = currIndex;
    for (let i = currIndex + 1; i < array.length; i++) {
      if (array[i] < item) {
        copyCurrIndex++;
      }
    }
    if (copyCurrIndex === currIndex) {
      continue
    }
    while (item === array[copyCurrIndex]) {
      copyCurrIndex++;
    }
    let temp = array[copyCurrIndex];
    array[copyCurrIndex] = item;
    item = temp;

    while (copyCurrIndex !== currIndex) {
      copyCurrIndex = currIndex;
      for (let i = currIndex + 1; i < array.length; i++) {
        if (array[i] < item) {
          copyCurrIndex++;
        }
      }
      while (item === array[copyCurrIndex]) {
        copyCurrIndex++;
      }
      let temp = array[copyCurrIndex];
      array[copyCurrIndex] = item;
      item = temp;
    }
  }
  return array
}

let arr = [5, 4, 3, 2, 1];
console.log(cycleSort(arr));