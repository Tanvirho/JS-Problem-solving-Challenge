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

// 5. Check if Two Strings Are Anagrams (Without Sorting)
// Input: "listen", "silent"
// Output: Anagram ✨ Use character frequency comparison — no .sort().

function areAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const frequency = {};
  for (let i = 0; i < str1.length; i++) {
    frequency[str1[i]] = (frequency[str1[i]] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    if (!frequency[char]) return false;
    frequency[char]--;
  }
  return true;
}
areAnagram("listen", "silent");

// 6. Find the First Non-Repeating Character
// Input: "aabbcddeff"
// Output: c ✨ Requires 2-pass algorithm: first count → then find first unique.

function nonRepeatingCharacter(str) {
  const frequency = {};
  for (let i = 0; i < str.length; i++) {
    frequency[str[i]] = (frequency[str[i]] || 0) + 1;
  }
  for (let i = 0; i < str.length; i++) {
    if (frequency[str[i]] === 1) return str[i];
  }
  return null;
}
nonRepeatingCharacter("aabbcddeff");

// 7. Remove All Duplicate Characters (Keep First Occurrence)
// Input: "programming"
// Output: "progamin" ✨ Use a visited set + build new string.

function removeDuplicate(str) {
  const set = {};
  for (let i = 0; i < str.length; i++) {
    set[str[i]] = (set[str[i]] || 0) + 1;
  }
  const key = Object.keys(set);
  let string = "";
  for (const char of key) {
    string += char;
  }
  return string;
}
removeDuplicate("programming");

// 8. Check if a String Contains Only Alphabets (No Regex)
// Input: "HelloWorld123"
// Output: False ✨ Use ASCII ranges manually.

function isContainsAlphabets(str) {
  if (str.length === 0) return false;
  for (let i = 0; i < str.length; i++) {
    let asciiCode = str.charCodeAt(i);
    let isAlphabet =
      (asciiCode >= 65 && asciiCode <= 90) ||
      (asciiCode >= 97 && asciiCode <= 122);
    if (!isAlphabet) {
      return false;
    }
  }
  return true;
}
isContainsAlphabets("HelloWorld123");

// 9. Reverse Only the Words in a Sentence
// Input: "I love coding"
// Output: "coding love I" ✨ Split manually or build reverser yourself.

function reverseWord(str) {
  // let set = str.split(' ')
  //  let reverseWorld = "";
  // for (let i = set.length - 1; i >= 0; i--) {
  //   reverseWorld += set[i]
  //   if(i > 0){
  //     reverseWorld += " "
  //   }
  // }
  // return reverseWorld;

  let word = "";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      result = word + (result ? " " : "") + result;
      word = "";
    } else {
      word += str[i];
    }
  }
  result = word + (result ? " " : "") + result;
  return result;
}
reverseWord("I love coding");

// 4️⃣ Find the Longest Word in a Sentence
// Input: "coding is beautiful"
// Output: "beautiful" ✨ Manual scanning + longest tracking.

// 5️⃣ Count the Number of Words (Manually Without split)
// Input: "  hi   there  world "
// Output: 3 words ✨ Detect transitions from space → non-space using logic.

// 6️⃣ Find All Substrings of a String (No Built-ins)
// Input: "abc"
// Output: a, ab, abc, b, bc, c ✨ Nested loops + substring construction.

// 7️⃣ Compress a String (Basic Run-Length Encoding)
// Input: "aaabbccccd"
// Output: "a3b2c4d1" ✨ Count consecutive characters and build encoded output.
