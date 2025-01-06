/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  // DFS
  const directions = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];

  const startColor = image[sr][sc];

  if (startColor === color) {
    return image;
  }

  function dfs(i, j) {
    if (image[i][j] !== startColor) {
      return;
    }

    image[i][j] = color;

    for (const [row, col] of directions) {
      const next_i = i + row;
      const next_j = j + col;
      if (0 <= next_i && next_i < image.length && 0 <= next_j && next_j < image[0].length) {
        dfs(next_i, next_j);
      }
    }
  }

  dfs(sr, sc);
  return image;
};
