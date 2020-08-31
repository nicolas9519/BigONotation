/**
 * matrix = [
 *  [1,1,1,1,1,1],
 *  [1,0,0,0,0,1],
 *  [1,0,1,1,1,1],
 *  [1,0,1,1,1,1],
 *  [1,0,1,1,1,1],
 *  [1,1,1,1,1,1],
 * ];
 * start(4, 1) end(1, 4) => true
 */
const assert = require('assert').strict;

function thereIsConnection(matrix, start, end) {
  const [xStart, yStart] = start;
  if (matrix[xStart][yStart] !== 0) return false;
  const stack = [];
  stack.push(start);
  const [xEnd, yEnd] = end;
  const visited = {};
  visited[`${xStart}${yStart}`] = true;
  while (stack.length) {
    const [x, y] = stack.shift();
    if (x === xEnd && y === yEnd) return true;
    if (matrix[x - 1][y] === 0 && !visited[`${x - 1}${y}`]) {
      visited[`${x - 1}${y}`] = true;
      stack.push([x - 1, y]);
    }
    if (matrix[x + 1][y] === 0 && !visited[`${x + 1}${y}`]) {
      visited[`${x + 1}${y}`] = true;
      stack.push([x + 1, y]);
    }
    if (matrix[x][y - 1] === 0 && !visited[`${x}${y - 1}`]) {
      visited[`${x}${y - 1}`] = true;
      stack.push([x, y - 1]);
    }
    if (matrix[x][y + 1] === 0 && !visited[`${x}${y + 1}`]) {
      visited[`${x}${y + 1}`] = true;
      stack.push([x, y + 1]);
    }
  }
  return false;
}

const matrix = [
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1],
  [1, 1, 1, 0, 0, 1],
  [1, 1, 0, 0, 1, 1],
  [1, 0, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];
const start = [4, 1];
const end = [1, 4];

assert.equal(thereIsConnection(matrix, start, end), true);
