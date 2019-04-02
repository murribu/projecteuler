var longestChainStarter = 1;
var longestChainLength = -1;

for (var i = 1; i < 1000000; i++) {
  var chain = findChain([i]);
  if (chain.length > longestChainLength) {
    longestChainLength = chain.length;
    longestChainStarter = i;
  }
}

console.log(longestChainStarter);

function findChain(chain) {
  var n = chain[chain.length - 1];
  if (n === 1) {
    return chain;
  } else if (n % 2 === 0) {
    chain.push(n/2);
  } else {
    chain.push((3*n) + 1);
  }
  return findChain(chain);
}