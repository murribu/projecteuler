var palindromes = [];

for (var i = 1; i < 1000000; i++) {
  if (isPalindrome(i.toString()) && isPalindrome(dec2bin(i))) {
    palindromes.push([i, dec2bin(i)]);
  }
}

console.log(palindromes);
console.log(palindromes.reduce((acc, cur) => acc + cur[0], 0));

function isPalindrome(str) {
  for (var i = 0; i <= str.length / 2; i++) {
    if (str.substring(i, i + 1) !== str.substring(str.length - i - 1, str.length - i)) {
      return false;
    }
  }
  return true;
}

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}