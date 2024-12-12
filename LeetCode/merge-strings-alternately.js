function mergeAlternately(word1, word2) {
  const word1len = word1.length;
  const word2len = word2.length;
  let mergedStr = "";

  let i = 0;
  while (i < word1len && i < word2len) {
    mergedStr += word1[i];
    mergedStr += word2[i];
    i++;
  }

  if (i < word1len) {
    mergedStr = mergedStr.concat(word1.split("").slice(i).join(""));
  } else {
    mergedStr = mergedStr.concat(word2.split("").slice(i).join(""));
  }

  return mergedStr;
}
