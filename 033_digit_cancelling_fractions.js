var fractions = [];

for (var denom = 10; denom <= 99; denom++) {
  for (var num = 10; num <= denom; num++) {
    if (num / denom === parseInt(num.toString().split('')[0]) / parseInt(denom.toString().split('')[1])) {
      fractions.push([num, denom, parseInt(num.toString().split('')[0]), parseInt(denom.toString().split('')[1])]);
    }
    if (num / denom === parseInt(num.toString().split('')[1]) / parseInt(denom.toString().split('')[0])) {
      fractions.push([num, denom, parseInt(num.toString().split('')[1]), parseInt(denom.toString().split('')[0])]);
    }
  }
}

console.log(fractions);

// [ 26, 65, 2, 5 ]
// [ 49, 98, 4, 8 ]
// [ 19, 95, 1, 5 ]
// [ 16, 64, 1, 4 ]

2*4 / 4*5*5*8
1 / 100

So. 100