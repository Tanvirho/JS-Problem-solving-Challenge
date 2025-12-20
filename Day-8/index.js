// 🎯 Day 8 – String Problems
// 🧩 Core Concept Focus
// String traversal
// Frequency counting
// Manual substring searching
// String transformation logic
// Character classification
// Avoiding built-ins where needed (for skill building)
// 🏫 Class Questions
// 1. Reverse a String (Manual Method Only)
// Input: "javascript"
// Output: "tpircsavaj" ✨ Use a loop — no .reverse().

function reverseString(input) {
  let reverseWorld = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reverseWorld += input[i];
  }
  return reverseWorld;
}
reverseString("javascript");

// 2. Check if a String is a Palindrome
// Input: "racecar"
// Output: Palindrome ✨ Compare characters from both ends using two-pointer logic.

function palindrome(input) {
  let reverseWorld = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reverseWorld += input[i];
  }
  return reverseWorld === input;
}
palindrome("racecar");

//or

function palindrome(input) {
  let leftIndex = 0;
  let rightIndex = input.length - 1;
  while (leftIndex < rightIndex) {
    if (input[leftIndex] !== input[rightIndex]) return false;
    leftIndex++;
    rightIndex--;
  }
  return true;
}
palindrome("ratcecar");

// 3. Count Frequency of Each Character
// Input: "banana"
// Output: { b:1, a:3, n:2 } ✨ Teaches hash maps / JS objects + iteration.