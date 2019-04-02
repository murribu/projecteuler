console.log(findCombinations(process.argv[2],process.argv[2]));


function findCombinations(x, y) {
  if (x === 0 || y === 0) {
    return 1;
  }
  return findCombinations(x - 1, y) + findCombinations(x, y - 1)
}