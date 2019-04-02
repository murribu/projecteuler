function permuteStr(str, start, end, permutations = []) {
  if (start === end) {
    console.log(str, start, end);
    permutations.push(str);
    return permutations;
  } else {
    // make sure that each char ends up in the first position
    // then call permute again, but only switch around the remaining str (after the first char)
    // then switch them back to reset the string and grab the next
    for (var i = start; i <= end; i++) {
      str = swapStr(str, start, i);
      console.log(str, start, end, 'swapped');
      permutations = permuteStr(str, start + 1, end, permutations);
    }
  }
  return permutations
}

function swapStr (str, i, j) {
  var arr = str.split('');
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr.join('');
}

// str = '0123456789';
// var n = str.length;
// permuteStr(str, 0, n -1);

// console.log(permutations.sort((a, b) => { return a > b ? 1 : -1; }).slice(999999));


str = '0123';
console.log(permuteStr(str, 0 , str.length - 1).sort((a, b) => { return a > b ? 1 : -1; }));
