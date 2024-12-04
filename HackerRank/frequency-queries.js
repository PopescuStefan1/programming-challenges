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

// Complete the freqQuery function below.
function freqQuery(queries) {
  const dict = new Map();
  const printQueryResults = [];
  queries.forEach(([operation, element]) => {
    switch (operation) {
      case 1:
        // Add
        if (dict.has(element)) {
          dict.set(element, dict.get(element) + 1);
        } else {
          dict.set(element, 1);
        }
        break;
      case 2:
        // Remove
        if (dict.get(element) > 1) {
          dict.set(element, dict.get(element) - 1);
        } else {
          dict.delete(element);
        }
        break;
      case 3:
        let found = false;
        for (const [key, value] of dict) {
          if (value === element) {
            found = true;
            break;
          }
        }
        printQueryResults.push(found ? 1 : 0);
        break;
    }
  });

  return printQueryResults;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  let queries = Array(q);

  for (let i = 0; i < q; i++) {
    queries[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((queriesTemp) => parseInt(queriesTemp, 10));
  }

  const ans = freqQuery(queries);

  ws.write(ans.join("\n") + "\n");

  ws.end();
}
