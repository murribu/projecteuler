var letterCount = 0;
var numbersArray = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tensArray = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

var count = 'onethousand'.length;

for (var i = 1; i < 1000; i++) {
  var hundies = Math.floor(i / 100);
  var tens = Math.floor(i % 100 / 10);
  var ones = Math.floor(i % 10);
  count += numbersArray[hundies].length;
  if (hundies > 0) {
    count += 'hundred'.length;
    if (tens > 0 || ones > 0) {
      count += 'and'.length;
    }
  }
  if (tens < 2) {
    count += numbersArray[i % 100].length;
  } else {
    count += tensArray[tens].length;
    count += numbersArray[ones].length;
  }
}

console.log(count);