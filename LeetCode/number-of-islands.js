/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // DFS
  // const visited = [];

  // for (let i = 0; i < grid.length; i++) {
  //     visited.push(new Array(grid[0].length).fill(false));
  // }

  // const directions = [[0, -1], [-1, 0], [0, 1], [1, 0]];
  // let islandCount = 0;

  // function dfs(i, j) {
  //     if (grid[i][j] === '0') {
  //         return;
  //     }

  //     if (visited[i][j]) {
  //         return;
  //     }

  //     visited[i][j] = true;

  //     for (const [row, col] of directions) {
  //         next_i = i + row;
  //         next_j = j + col;
  //         if (0 <= next_i && next_i < grid.length && 0 <= next_j && next_j < grid[0].length) {
  //             dfs(next_i, next_j);
  //         }
  //     }
  // }

  // for (let i = 0; i < grid.length; i++) {
  //     for (let j = 0; j < grid[0].length; j++) {
  //         if(!visited[i][j] && grid[i][j] === "1") {
  //             islandCount++;
  //             dfs(i, j);
  //         }
  //     }
  // }

  // return islandCount;

  // BFS
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

  function bfs(i, j) {
    const queue = [[i, j]];
    while (queue.length > 0) {
      const [curr_i, curr_j] = queue.shift();
      if (visited[curr_i][curr_j]) {
        continue;
      }

      if (grid[curr_i][curr_j] === "0") {
        continue;
      }

      visited[curr_i][curr_j] = true;

      for (const [row, col] of directions) {
        const next_i = curr_i + row;
        const next_j = curr_j + col;
        if (0 <= next_i && next_i < grid.length && 0 <= next_j && next_j < grid[0].length) {
          queue.push([next_i, next_j]);
        }
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!visited[i][j] && grid[i][j] === "1") {
        islandCount++;
        bfs(i, j);
      }
    }
  }

  return islandCount;
};
