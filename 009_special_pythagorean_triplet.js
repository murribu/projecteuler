var a = 1;
var b = 1;
var c = 1;

for (var a = 1; a < 1000; a++) {
  for (var b = 1; b < 1000; b++) {
    for (var c = 1; c < 1000; c++) {
      if ((a * a) + (b * b) === c * c && a + b + c === 1000) {
        console.log([a * b * c]);
        return;
      }
    }
  }
}