function isPrime(n) {
  if (n % 2 === 0)
    return false;
  for(var div = 3; div <= Math.sqrt(n); div += 2) {
    if (n % div === 0)
      return false;
  }
  return true;
}

var winners = [2];

for (var i = 2; i < 1000000; i++) {
  if (winners.indexOf(i) === -1) {
    var str = i.toString();
    var pendingWinners = [];
    for (var spot = 0; spot < str.length; spot++){
      var newNumber = str.substring(spot, str.length) + str.substring(0, spot)
      if (isPrime(parseInt(newNumber))) {
        pendingWinners.push(parseInt(newNumber));
      } else {
        break;
      }
    }
    if (pendingWinners.length === str.length) {
      for (var j = 0; j < pendingWinners.length; j++) {
        if (winners.indexOf(pendingWinners[j]) === -1) {
          winners.push(pendingWinners[j]);
        }
      }
    }
  }
}

console.log(winners.sort((a, b) => a > b ? 1 : -1));
console.log(winners.length);