"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'whatFlavors' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY cost
 *  2. INTEGER money
 */

function whatFlavors(cost, money) {
  // Write your code here

  // First solution:
  // for(let i = 0; i < cost.length - 1; i++) {
  //     if(cost[i] >= money) {
  //         continue;
  //     }

  //     for(let j = i + 1; j < cost.length; j++) {
  //         if(cost[i] + cost[j] === money) {
  //             console.log(`${i + 1} ${j + 1}`);
  //             return;
  //         }
  //     }
  // }

  // Improved version using map:
  const pricesMap = new Map();
  for (let i = 0; i < cost.length; i++) {
    if (pricesMap.has(money - cost[i])) {
      console.log(`${pricesMap.get(money - cost[i]) + 1} ${i + 1}`);
      return;
    }

    pricesMap.set(cost[i], i);
  }
}

function main() {
  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const money = parseInt(readLine().trim(), 10);

    const n = parseInt(readLine().trim(), 10);

    const cost = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((costTemp) => parseInt(costTemp, 10));

    whatFlavors(cost, money);
  }
}
