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
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
  // Write your code here
  let numOfLetterA = 0;
  const noOfFullStringRepeats = Math.floor(n / s.length);
  const remainder = n % s.length;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      if (i < remainder) {
        numOfLetterA++;
      }
      numOfLetterA += noOfFullStringRepeats;
    }
  }

  return numOfLetterA;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const n = parseInt(readLine().trim(), 10);

  const result = repeatedString(s, n);

  ws.write(result + "\n");

  ws.end();
}
