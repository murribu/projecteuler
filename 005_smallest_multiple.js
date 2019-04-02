console.log(findSmallestMultiple());

function findSmallestMultiple() {
  var n = 2520;
  while (true) {
    for(var div = 1; div < 21; div++) {
      if (n % div !== 0) {
        break;
      }
      if (div === 20) {
        return n;
      }
    }
    n++;
  }
}