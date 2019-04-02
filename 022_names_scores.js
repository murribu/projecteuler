var names = require('./p022_names');

function nameScore(name) {
  var retVal = 0;
  name.split('').forEach(c => {
    retVal += c.charCodeAt(0) - 64;
  })
  // console.log(retVal);
  return retVal;
}

names = names.sort((a, b) => { return a > b ? 1 : -1; });
console.log(names, names.reduce((acc, cur, idx) => { return acc + ((idx + 1) * nameScore(cur))}, 0));
