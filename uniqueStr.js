// discover if a string contains only unique characters

function uniqueStr(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (arr[str.charCodeAt(i)]) {
      arr[str.charCodeAt(i)]++
      return false
    } else {
      arr[str.charCodeAt(i)] = 1
    }
  }
  return true
}

console.log(uniqueStr('abcdefg'));
console.log(uniqueStr('abcdefa'));