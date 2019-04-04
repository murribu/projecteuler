var arr = [];
var max = 1001; // must be odd

for (var y = 0; y < max; y++) {
  arr[y] = [];
  for (var x = 0; x < max; x++) {
    arr[y][x] = 0;
  }
}

y = Math.floor(max / 2);
x = y;
var prevMove = '';

for (var i = 1; i <= (max * max); i++) {
  arr[y][x] = i;
  if (i === 1) {
    x++;
    prevMove = 'right';
  } else if (prevMove === 'right') {
    if (arr[y+1][x] === 0) {
      y++;
      prevMove = 'down';
    } else {
      x++;
    }
  } else if (prevMove === 'down') {
    if (arr[y][x-1] === 0) {
      x--;
      prevMove = 'left';
    } else {
      y++;
    }
  } else if (prevMove === 'left') {
    if (arr[y-1][x] === 0) {
      y--;
      prevMove = 'up';
    } else {
      x--;
    }
  } else if (prevMove === 'up') {
    if (arr[y][x+1] === 0) {
      x++;
      prevMove = 'right';
    } else {
      y--;
    }
  }
}

console.log(arr);

var sum = 0;

for (var j = 0; j < max; j++) {
  sum += arr[j][j];
  if (j !== Math.floor(max / 2)) {
    sum += arr[j][max - j - 1];
  }
}

console.log(sum);