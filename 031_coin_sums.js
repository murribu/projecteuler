var count = 0;

for (var pound2 = 0; pound2 <= 1; pound2++) {
  for (var pound1 = 0; pound1 <= 2; pound1++) {
    for (var half = 0; half <= 4; half++) {
      for (var twenty = 0; twenty <= 10; twenty++) {
        for (var ten = 0; ten <= 20; ten++) {
          for (var five = 0; five <= 40; five++) {
            for (var two = 0; two <= 100; two++) {
              for (var one = 0; one <= 200; one++) {
                if ((pound2*200) + (pound1 * 100) + (half * 50) + (twenty * 20) + (ten * 10) + (five * 5) + (two * 2) + one === 200) {
                  count++;
                  console.log(pound2, pound1, half, twenty, ten, five, two, one);
                }
              }
            }
          }
        }
      }
    }
  }
}

console.log(count);