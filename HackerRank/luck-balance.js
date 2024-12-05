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
 * Complete the 'luckBalance' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. 2D_INTEGER_ARRAY contests
 */

function luckBalance(k, contests) {
  // Write your code here
  // let luck = 0;
  // const importantContestsLostLuck = [];
  // for(const contest of contests) {
  //     if(contest[1] === 0) {
  //         luck += contest[0];
  //         continue;
  //     }

  //     if(k > 0) {
  //         luck += contest[0];
  //         importantContestsLostLuck.push(contest[0]);
  //         importantContestsLostLuck.sort((a, b) => Number(a) - Number(b));
  //         k--;
  //         continue;
  //     }

  //     if(contest[0] > importantContestsLostLuck[0]) {
  //         luck += contest[0] - importantContestsLostLuck[0];
  //         importantContestsLostLuck.shift();
  //         importantContestsLostLuck.push(contest[0]);
  //         importantContestsLostLuck.sort((a, b) => Number(a) - Number(b));
  //     }
  // }

  // return luck;

  contests.sort((a, b) => Number(b[0]) - Number(a[0]));
  let luck = 0;

  for (const contest of contests) {
    if (contest[1] === 0) {
      luck += contest[0];
      continue;
    }

    if (k > 0) {
      luck += contest[0];
      k--;
      continue;
    }

    luck -= contest[0];
  }

  return luck;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const n = parseInt(firstMultipleInput[0], 10);

  const k = parseInt(firstMultipleInput[1], 10);

  let contests = Array(n);

  for (let i = 0; i < n; i++) {
    contests[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((contestsTemp) => parseInt(contestsTemp, 10));
  }

  const result = luckBalance(k, contests);

  ws.write(result + "\n");

  ws.end();
}
