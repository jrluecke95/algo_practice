// sorts through array comparing indices by pairs moving up the list

let array = [1, 0, 3, 5, 4, 1, 7, 2, 4];

function bubble_Sort(a) {
  let swapp;
  let n = a.length - 1;
  let x = a;
  do {
    // sets swapp to false and will reamin if 'if' inside of for loop goes untouched 
    swapp = false;
    // checks each index and its neighboring element to see if swap is necesssary and if so it sets swapp to true sot hat loop will keep running
    for (let i = 0; i < n; i++) {
      // checks to see if index value to the right is less than left and swaps if so
      if (x[i] > x[i + 1]) {
        let temp = x[i];
        x[i] = x[i + 1];
        x[i + 1] = temp;
        swapp = true;
      }
    }
    n--;
  } while (swapp);
  return x;
}

console.log(bubble_Sort(array));
