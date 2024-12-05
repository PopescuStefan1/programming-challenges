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
 * Complete the 'makeAnagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function makeAnagram(a, b) {
  // Write your code here
  const lettersDict = new Map();
  for (let i = 0; i < a.length; i++) {
    if (lettersDict.has(a[i])) {
      lettersDict.set(a[i], lettersDict.get(a[i]) + 1);
    } else {
      lettersDict.set(a[i], 1);
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (lettersDict.has(b[i])) {
      if (lettersDict.get(b[i]) === 1) {
        lettersDict.delete(b[i]);
      } else {
        lettersDict.set(b[i], lettersDict.get(b[i]) - 1);
      }
    } else {
      lettersDict.set(b[i], -1);
    }
  }

  let letterDifference = 0;
  for (const [key, value] of lettersDict) {
    letterDifference += Math.abs(value);
  }

  return letterDifference;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const a = readLine();

  const b = readLine();

  const res = makeAnagram(a, b);

  ws.write(res + "\n");

  ws.end();
}
