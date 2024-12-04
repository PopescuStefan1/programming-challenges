"use strict";

const fs = require("fs");

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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
  // Write your code here
  // ---------------------
  // First solution:
  //   let noOfPairs = 0;
  //   for (let i = 0; i < n - 1; i++) {
  //     for (let j = i + 1; j < n; j++) {
  //       if (ar[i] === ar[j]) {
  //         noOfPairs++;
  //         for (let k = j; k < n; k++) {
  //           ar[k] = ar[k + 1];
  //         }
  //         n--;
  //         break;
  //       }
  //     }
  //   }
  //   return noOfPairs;
  // ----------------------
  // Second solution:
  let noOfPairs = 0;
  const socksObject = {};

  ar.forEach((sock) => {
    if (Object.hasOwn(socksObject, sock)) {
      socksObject[sock]++;
      if (socksObject[sock] % 2 === 0) {
        noOfPairs++;
      }
    } else {
      socksObject[sock] = 1;
    }
  });

  return noOfPairs;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const ar = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arTemp) => parseInt(arTemp, 10));

  const result = sockMerchant(n, ar);

  ws.write(result + "\n");

  ws.end();
}
