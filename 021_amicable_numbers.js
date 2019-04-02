function d(n) {
  var divisors = findDivisors(n);
  //console.log(divisors);
  return {"divisors": divisors, "sum": divisors.reduce((acc, cur) => { return acc + cur; }, 0)};
}

function findDivisors(n) {
  var divisors = [1];
  
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (n / i !== i) {
        divisors.push(n / i);
      }
    }
  }
  return divisors;
}

var dees = [];
var upperLimit = 10000;

for (var i = 1; i < upperLimit; i++) {
  var d_obj = d(i);
  dees.push({"num": i, "sum": d_obj.sum, "divisors": d_obj.divisors});
}

// console.log(dees);

var sum = 0;

for (var j = 1; j < upperLimit; j++) {
  var j_obj = dees.find(d => d.num === j);
  var match = dees.filter(d => d.num !== j && d.sum === j && j_obj.sum === d.num);
  if (match.length > 0) {
    sum += j; // only do one of them because each pair will be in there twice
    console.log([j_obj, match]);
  }
}

console.log(sum);
