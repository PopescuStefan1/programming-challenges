/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  // BFS:
  // const result = [];
  // for (let i = 0; i < mat.length; i++) {
  //     result.push(new Array(mat[0].length).fill(0));
  // }

  // const directions = [[0, -1], [-1, 0], [0, 1], [1, 0]];

  // function bfs(i, j) {
  //     let minDistance = Number.MAX_SAFE_INTEGER;

  //     const visited = new Set();

  //     const queue = [[i, j]];
  //     while (queue.length > 0) {
  //         const [curr_i, curr_j] = queue.shift();

  //         if (visited.has(`${curr_i}${curr_j}`)) {
  //             continue;
  //         }

  //         visited.add(`${curr_i}${curr_j}`);

  //         if (mat[curr_i][curr_j] === 0) {
  //             const distance = Math.abs(curr_i - i) + Math.abs(curr_j - j);

  //             if (distance < minDistance) {
  //                 minDistance = distance;
  //             }
  //         }

  //         if (minDistance === Number.MAX_SAFE_INTEGER) {
  //             for (const [row, col] of directions) {
  //                 next_i = curr_i + row;
  //                 next_j = curr_j + col;
  //                 if (0 <= next_i && next_i < mat.length && 0 <= next_j && next_j < mat[0].length) {
  //                     queue.push([next_i, next_j]);
  //                 }
  //             }
  //         }
  //     }

  //     result[i][j] = minDistance;
  // }

  // for (let i = 0; i < mat.length; i++) {
  //     for (let j = 0; j < mat[0].length; j++) {
  //         if (mat[i][j] !== 0) {
  //             bfs(i, j);
  //         }
  //     }
  // }

  // return result;

  // Improved BFS:
  const queue = [];
  const MAX_NUM = mat.length * mat[0].length;

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
      } else {
        mat[i][j] = MAX_NUM;
      }
    }
  }

  const directions = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];

  while (queue.length > 0) {
    const [curr_i, curr_j] = queue.shift();

    for (const [row, col] of directions) {
      const next_i = curr_i + row;
      const next_j = curr_j + col;
      if (
        0 <= next_i &&
        next_i < mat.length &&
        0 <= next_j &&
        next_j < mat[0].length &&
        mat[next_i][next_j] > mat[curr_i][curr_j] + 1
      ) {
        queue.push([next_i, next_j]);
        mat[next_i][next_j] = mat[curr_i][curr_j] + 1;
      }
    }
  }

  return mat;
};
