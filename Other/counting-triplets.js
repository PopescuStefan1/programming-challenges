/*
    There is an integer array arr[n] and an integer value d. The array is indexed from 1 to n.
    Count the number of distinct triplets (i, j, k) such that 0 < i < j < k <= n and the sum (a[i] + a[j] + a[k]) is divisible by d.
*/

function countDivisibleTriplets(arr, d) {
  // Initial approach:
  //   const n = arr.length;
  //   let count = 0;
  //   for (let i = 0; i < n - 2; i++) {
  //     for (let j = i + 1; j < n - 1; j++) {
  //       for (let k = j + 1; k < n; k++) {
  //         const sum = arr[i] + arr[j] + arr[k];
  //         if (sum % d === 0) {
  //           count++;
  //         }
  //       }
  //     }
  //   }
  //   return count;

  // Using freq array
  const modCounts = new Array(d).fill(0);

  for (let el of arr) {
    modCounts[el % d]++;
  }

  let count = 0;
  for (let i = 0; i < d; i++) {
    for (let j = i; j < d; j++) {
      const k = (d - ((i + j) % d)) % d;

      if (k < j) continue;

      if (i === j && j === k) {
        count += (modCounts[i] * (modCounts[i] - 1) * (modCounts[i] - 2)) / 6;
      } else if (i === j) {
        count += ((modCounts[i] * (modCounts[i] - 1)) / 2) * modCounts[k];
      } else if (j === k) {
        count += modCounts[i] * ((modCounts[j] * (modCounts[j] - 1)) / 2);
      } else {
        count += modCounts[i] * modCounts[j] * modCounts[k];
      }
    }
  }

  return count;
}

const arr = [3, 3, 4, 7, 8];
const d = 5;

const start = performance.now();
const result = countDivisibleTriplets(arr, d);
const end = performance.now();

console.log(`Result ${result}`);
console.log(`Time: ${(end - start).toFixed(2)}ms`);
