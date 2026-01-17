// 🎯 Day 9 – Medium String Algorithms
// 🧩 Core Concept Focus
// Sliding window problems
// Substring search
// Window expansion & contraction
// Character frequency maps
// 🏫 Class Questions
// 1. Find if One String Is a Substring of Another (Manual Method)
// Input: Main string: "hellothere" Target string: "there"

// Output: true ✨ Manual parsing only; check character by character without using includes, or indexOf.

function isSubstring(str, subStr) {
  for (let i = 0; i <= str.length - subStr.length; i++) {
    let match = true;
    for (let j = 0; j < subStr.length; j++) {
      if (str[i + j] !== subStr[j]) {
        match = false;
        break;
      }
    }
    if (match) return true;
  }
  return false;
}
isSubstring("hellothere", "there");

// 2. Manual Substring Search (Without Using indexOf)
// Input: text = "hello world", pattern = "wor"
// Output: Found at index 6 ✨ Classic naive pattern matching algorithm (two nested loops).

function indexOfStr(str, subStr) {
  for (let i = 0; i <= str.length - subStr.length; i++) {
    let match = true;
    for (let j = 0; j < subStr.length; j++) {
      if (str[i + j] !== subStr[j]) {
        match = false;
        break;
      }
    }
    if (match) return i;
  }
  return -1;
}
indexOfStr("hello world", "wor");

// 3. Check if One String is Rotation of Another
// Input: "abcde", "cdeab"
// Output: Rotation ✨ Use the trick: second string must be inside (s1 + s1).

function isRotation(s1, s2) {
  if (s1.length !== s2.length) return false;
  s1 = s1 + s1;
  for (let i = 0; i <= s1.length - s2.length; i++) {
    let match = true;
    for (let j = 0; j < s2.length; j++) {
      if (s1[i + j] !== s2[j]) {
        match = false;
        break;
      }
    }
    if (match) return true;
  }
  return false;
}
isRotation("abcde", "cdeab");

// 4. Count Frequency of Each Word in a Sentence
// Input: "i love coding and i love javascript"
// Output: { i:2, love:2, coding:1, and:1, javascript:1 } ✨ Word parsing + map building.

function countWords(str) {
  let word = "";
  const arr = [];
  const freq = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      if (word !== "") {
        arr.push(word);
        word = "";
      }
    } else {
      word += str[i];
    }
  }
  if (word !== "") {
    arr.push(word);
  }
  for (let w of arr) {
    freq[w] = (freq[w] || 0) + 1;
  }
  return freq;
}
countWords("i love coding and i love javascript");

// 5. Check If a String Is a Pangram
// Input: "The quick brown fox jumps over the lazy dog"
// Output: Pangram ✨ Check if all 26 letters exist.

function isPangram(str) {
  const seen = new Set();
  for (let char of str.toUpperCase()) {
    if (char >= "A" && char <= "Z") {
      seen.add(char);
    }
  }
  if (seen.size === 26) return true;
  return false;
}
isPangram("The quick brown fox jumps over the lazy dog");

// 6. Remove All Duplicate Words From a Sentence
// Input: "this is is a test test string"
// Output: "this is a test string" ✨ Track seen words, build cleaned sentence.

function removeDuplicateWords(str) {
  // const arr = str.split(" ");
  // const seen = {}
  // let result = ""
  // for(let word of arr){
  //   seen[word] = (seen[word] || 0) + 1;
  // }
  // for(let word in seen){
  //   result += word + " ";
  // }
  // return result

  return [...new Set(str.split(" "))].join(" ");
}
removeDuplicateWords("this is is a test test string");

// 4️⃣ Find the Longest Palindromic Substring (Brute Force Allowed)
// Input: "babad"
// Output: "bab" or "aba" ✨ Check all substrings; teaches brute-force reasoning.
// 5️⃣ Find All Anagram Pairs in an Array of Strings
// Input: ["cat", "tac", "act", "dog"]
// Output: ["cat","tac","act"]
// 6️⃣ Find the Longest Substring Without Repeating Characters (Sliding Window)
// Input: "abcabcbb"
// Output: "abc" ✨ Introduction to sliding windows, hash maps, and window shrinking logic.
