// order doesn't matter
var input = ['a', 'b', 'c', 'd'];

function getCombinations(arr) {
  var retVal = [];
  var f = function(prefix, arr) {
    for (var i = 0; i < arr.length; i++) {
      var toPush = prefix.concat(arr[i]); 
      retVal.push(toPush);
      f(toPush, arr.slice(i + 1));
    }
  }
  f([], arr);
  return retVal;
}

function getCombinations2(arr, prefix = []) {
  var retVal = [];
  for (var i = 0; i < arr.length; i++) {
    var toAdd = prefix.concat(arr[i]);
    retVal.push(toAdd);
    var moreToAdd = getCombinations2(arr.slice(i + 1), toAdd);
    moreToAdd.forEach(a => {
      retVal.push(a);
    })
  }
  return retVal;
}

var arrInput = [['a', 'b', 8], ['b', 'c', 12], ['c', 'a', 14]];

function getCombinationsArr(arr, prefix = []) {
  var retVal = [];
  for (var i = 0; i < arr.length; i++) {
    var toAdd = [...prefix];
    toAdd.push(arr[i]);
    retVal.push(toAdd);
    var newArr = arr.slice(i + 1);
    var moreToAdd = getCombinationsArr(newArr, toAdd);
    moreToAdd.forEach(a => {
      // console.log('retval', retVal, 'a', a, 'end comment');
      retVal.push(a);
    })
  }
  return retVal;
}

// console.log(getCombinations2(input));
console.log(getCombinationsArr(arrInput));
// console.log([].concat('e'))