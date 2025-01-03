/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // DFS
  const visited = [];

  for (let i = 0; i < grid.length; i++) {
    visited.push(new Array(grid[0].length).fill(false));
  }

  const directions = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];
  let islandCount = 0;
  let inIsland = false;

  function dfs(i, j) {
    if (grid[i][j] === "0") {
      return;
    }

    if (visited[i][j]) {
      return;
    }

    if (!inIsland) {
      inIsland = true;
      islandCount++;
    }

    visited[i][j] = true;

    for (const [row, col] of directions) {
      next_i = i + row;
      next_j = j + col;
      if (0 <= next_i && next_i < grid.length && 0 <= next_j && next_j < grid[0].length) {
        dfs(next_i, next_j);
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      inIsland = false;
      dfs(i, j);
    }
  }

  return islandCount;
};
