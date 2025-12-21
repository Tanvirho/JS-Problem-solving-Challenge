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

function CountFrequency(str) {
  const frequency = {};
  for (let i = 0; i < str.length; i++) {
    frequency[str[i]] = (frequency[str[i]] || 0) + 1;
  }
  return frequency;
}
CountFrequency("banana");

// 4. Find the Most Frequent Character in a String
// Input: "success"
// Output: Most frequent: s (3 times) ✨ Builds on frequency map — find maximum occurrence.

function mostFrequent(str) {
  const frequency = {};
  let maxChar = "";
  let maxCharCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    frequency[char] = (frequency[char] || 0) + 1;
    if (maxCharCount < frequency[char]) {
      maxCharCount = frequency[char];
      maxChar = char;
    }
  }

  return maxChar;
}
mostFrequent("success");
