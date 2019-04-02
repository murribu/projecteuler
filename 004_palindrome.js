var n1 = 999;
var n2 = 999;
var largestPalindrome = -1;

for (var n1 = 0; n1 < 1000; n1++) {
  for (var n2 = 0; n2 < 1000; n2++) {
    if (n1 * n2 > largestPalindrome && isPalindrome(n1 * n2)) {
      largestPalindrome = n1 * n2;
    }
  }
}

console.log(largestPalindrome);

function isPalindrome(num) {
  var str = num.toString();
  for (var sub = 0; sub < str.length / 2; sub++) {
    var firstComp = str.substring(sub, sub + 1);
    var secondComp = str.substring(str.length - sub - 1, str.length - sub);
    if (firstComp !== secondComp) {
      return false;
    }
  }
  return true;
}

