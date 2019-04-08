var sum = 0;
for (var a = 0; a <= 9; a++) {
  for (var b = 0; b <= 9; b++) {
    for (var c = 0; c <= 9; c++) {
      for (var d = 0; d <= 9; d++) {
        for (var e = 0; e <= 9; e++) {
          for (var f = 0; f <= 9; f++) {
            if (Math.pow(a, 5) + Math.pow(b, 5) + Math.pow(c, 5) + Math.pow(d, 5) + Math.pow(e, 5) + Math.pow(f, 5) === parseInt('' + a + b + c + d + e + f)) {
              console.log('' + a + b + c + d + e + f);
              if (parseInt('' + a + b + c + d + e + f) !== 1) {
                sum += parseInt('' + a + b + c + d + e + f);
              }
            }
          }
        }
      }
    }
  }
}

console.log(sum);