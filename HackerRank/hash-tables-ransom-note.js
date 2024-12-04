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
 * Complete the 'checkMagazine' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */

function checkMagazine(magazine, note) {
  // Write your code here
  const wordsMap = new Map();
  magazine.forEach((word) => {
    if (wordsMap.has(word)) {
      wordsMap.set(word, wordsMap.get(word) + 1);
    } else {
      wordsMap.set(word, 1);
    }
  });

  let canFormNote = true;
  for (let i = 0; i < note.length; i++) {
    if (!wordsMap.has(note[i])) {
      console.log("No");
      canFormNote = false;
      break;
    }
    if (wordsMap.get(note[i]) === 1) {
      wordsMap.delete(note[i]);
      continue;
    }

    wordsMap.set(note[i], wordsMap.get(note[i]) - 1);
  }
  if (canFormNote) {
    console.log("Yes");
  }
}

function main() {
  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const m = parseInt(firstMultipleInput[0], 10);

  const n = parseInt(firstMultipleInput[1], 10);

  const magazine = readLine().replace(/\s+$/g, "").split(" ");

  const note = readLine().replace(/\s+$/g, "").split(" ");

  checkMagazine(magazine, note);
}
