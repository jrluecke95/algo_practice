function cycleSort(array) {
  // going over array until 3rd to last index
  for (let currIndex = 0; currIndex < array.length - 1; currIndex++) {
    //setting item up to current index and making copy of index to keep track of where item will go
    let item = array[currIndex];
    let copyCurrIndex = currIndex;
    //looping through items in array other than the current one we are using as item value
    for (let i = currIndex + 1; i < array.length; i++) {
      //checking to see if item is greater than inner loop array value and adding one to its position if so (in order to determine final position in array)
      if (array[i] < item) {
        copyCurrIndex++;
      }
    }
    // if it's position is correct - continue
    if (copyCurrIndex === currIndex) {
      continue
    }
    // while the item is equal to duplicate values - move its  position - skipping duplicates
    while (item === array[copyCurrIndex]) {
      copyCurrIndex++;
    }
    // swapping values
    let temp = array[copyCurrIndex];
    array[copyCurrIndex] = item;
    item = temp;
    //looping over same code as above until whole array is sorted (which will have the copy and curr index equal each otehr since there is no array[i] < item check passing na diwll just skip through all conditionals)
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