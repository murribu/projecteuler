var products = [];
var multiplands = [];
for (var numbers = 0; numbers <= 99999; numbers++){
  if (numbers.toString().split('').filter((s, idx) => numbers.toString().split('').indexOf(s) === idx).length === numbers.toString().length) {
    // no dups so far
    var product1 = parseInt(numbers.toString().split('').slice(0,3).join('')) * parseInt(numbers.toString().split('').slice(3, 5).join(''));
    var product2 = parseInt(numbers.toString().split('').slice(0,4).join('')) * parseInt(numbers.toString().split('').slice(4, 5).join(''));
    var alldigits1 = numbers.toString() + product1.toString();
    if (alldigits1.length === 9 && alldigits1.length === alldigits1.split('').filter((s, idx) => alldigits1.split('').indexOf(s) === idx && s !== '0').length) {
      multiplands.push(alldigits1);
      products.push(product1);
    }
    var alldigits2 = numbers.toString() + product2.toString();
    if (alldigits2.length === 9 && alldigits2.length === alldigits2.split('').filter((s, idx) => alldigits2.split('').indexOf(s) === idx && s !== '0').length) {
      multiplands.push(alldigits2);
      products.push(product2);
    }
  }
}


var uniqueProducts = products.filter((cur, idx) => products.indexOf(cur) === idx)
var sum = uniqueProducts.reduce((acc, cur) => acc + cur, 0)
console.log(multiplands);
console.log(products, uniqueProducts, sum);