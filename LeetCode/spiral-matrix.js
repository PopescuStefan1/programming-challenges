/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function (matrix) {
  // First solution:
  // const output = [];
  // let i = 0;
  // let j = 0;
  // let minI = 0;
  // let minJ = 0;
  // let maxI = matrix.length - 1;
  // let maxJ = matrix[0].length - 1;

  // let direction = maxJ > 0 ? 'r' : 'd';
  // while (true) {
  //     if (minI > maxI || minJ > maxJ) {
  //         return output;
  //     }
  //     output.push(matrix[i][j]);

  //     switch (direction) {
  //         case 'r':
  //             if (j === maxJ) {
  //                 direction = 'd';
  //                 i++;
  //                 minI++;
  //             } else {
  //                 j++;
  //             }
  //             break;
  //         case 'd':
  //             if (i === maxI) {
  //                 direction = 'l';
  //                 j--;
  //                 maxJ--;
  //             } else {
  //                 i++;
  //             }
  //             break;
  //         case 'l':
  //             if (j === minJ) {
  //                 direction = 'u';
  //                 i--;
  //                 maxI--;
  //             } else {
  //                 j--;
  //             }
  //             break;
  //         case 'u':
  //             if (i === minI) {
  //                 direction = 'r';
  //                 j++;
  //                 minJ++;
  //             } else {
  //                 i--;
  //             }
  //             break;
  //     }
  // }

  // Second solution (similiar runtime and memory usage but cleaner code):
  const output = [];
  let minI = 0;
  let minJ = 0;
  let maxI = matrix.length - 1;
  let maxJ = matrix[0].length - 1;
  let i = 0;
  let j = 0;
  let direction = 0; // 0 - right; 1 - down; 2 - left; 3 - up;

  while (minI <= maxI && minJ <= maxJ) {
    output.push(matrix[i][j]);

    if (direction === 0 && j === maxJ) {
      minI++;
      direction = 1;
    } else if (direction === 1 && i === maxI) {
      maxJ--;
      direction = 2;
    } else if (direction === 2 && j === minJ) {
      maxI--;
      direction = 3;
    } else if (direction === 3 && i === minI) {
      minJ++;
      direction = 0;
    }

    i += direction === 1 ? 1 : direction === 3 ? -1 : 0;
    j += direction === 0 ? 1 : direction === 2 ? -1 : 0;
  }

  return output;
};
