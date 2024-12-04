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
 * Complete the 'activityNotifications' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY expenditure
 *  2. INTEGER d
 */

function activityNotifications(expenditure, d) {
  // Write your code here
  let notices = 0;
  for (let i = d; i < expenditure.length; i++) {
    const trailingDaysExpenditure = expenditure.slice(i - d, i);
    trailingDaysExpenditure.sort((a, b) => Number(a) - Number(b));

    let median;
    if (d % 2 === 1) {
      median = trailingDaysExpenditure[Math.floor(d / 2)];
    } else {
      median = (trailingDaysExpenditure[Math.floor(d / 2) - 1] + trailingDaysExpenditure[Math.floor(d / 2)]) / 2;
    }

    if (expenditure[i] >= median * 2) {
      notices++;
    }
  }

  return notices;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const n = parseInt(firstMultipleInput[0], 10);

  const d = parseInt(firstMultipleInput[1], 10);

  const expenditure = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((expenditureTemp) => parseInt(expenditureTemp, 10));

  const result = activityNotifications(expenditure, d);

  ws.write(result + "\n");

  ws.end();
}
