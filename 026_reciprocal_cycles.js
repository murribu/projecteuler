var Decimal = require('decimal.js')
var longestRepeater = false;
var longestRepeaterLength = 0;
var longestRepeaterDenominator = false;

Decimal.set({precision: 2000});

for (var i = Decimal(2); !i.equals(Decimal(1000)); i = i.plus(1)) {
  var repeater = extractRepeater(Decimal(1).dividedBy(i).toFixed(2000).substring(2, 2001));
  console.log(i, Decimal(1).dividedBy(i).toFixed(2000).substring(2, 501), repeater);
  if (repeater && repeater.length > longestRepeaterLength) {
    longestRepeater = repeater;
    longestRepeaterDenominator = i;
    longestRepeaterLength = repeater.length
  }
}

console.log(longestRepeaterDenominator, longestRepeater);

function extractRepeater(str) {
  for (var length = 3; length <= str.length; length++) {
    for (var start = 0; start <= str.length - length; start++) {
      if (str.substring(start, start+length) === str.substring(start+length,start+(2*length))) {
        return str.substring(start, start+length);
      }
    }
  }
  return 'false';
}