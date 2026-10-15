// 🎯 Day 18 – Recursion on Arrays and Strings
// 🧩 Core Concept Focus
// Passing index in recursive calls
// Reducing problem size using index or length
// Traversing arrays recursively
// Processing strings character by character
// Returning values from recursion
// No loops, no backtracking, no multiple recursive calls
// 🏫 Class Questions
// 1️⃣ Print All Elements of an Array Using Recursion
// Input: [1, 2, 3, 4]
// Output: 1 2 3 4
// Constraint: no loops allowed.

function printArray(arr, index = 0) {
  if (index === arr.length) return;
  console.log(arr[index]);
  printArray(arr, index + 1);
}
printArray([1, 2, 3, 4]);

// 2️⃣ Find the Sum of All Elements in an Array Using Recursion
// Input: [2, 4, 6, 8]
// Output: 20
function findSum(arr, sum = 0, index = 0) {
  if (index === arr.length) return sum;
  return findSum(arr, (sum += arr[index]), index + 1);
}
findSum([2, 4, 6, 8]);

// 3️⃣ Check if an Array Is Sorted (Ascending) Using Recursion
// Input: [1, 2, 3, 5, 4]
// Output: false

function isSorted(arr, index = 0) {
  if (arr.length - 1 === index) return true;
  if (arr[index] > arr[index + 1]) return false;
  return isSorted(arr, index + 1);
}
isSorted([1, 2, 3, 5, 4]);

// 4️⃣ Reverse a String Using Recursion
// Input: "hello"
// Output: "olleh"

function reverseString(str, index = str.length - 1, reversed = "") {
  if (index < 0) return reversed;
  return reverseString(str, index - 1, (reversed += str[index]));
}
reverseString("hello");

// 5️⃣ Check if a String Is Palindrome Using Recursion
// Input: "madam"
// Output: Palindrome

function isPalindrome(str, index = str.length - 1, reversed = "") {
  if (index < 0) return str === reversed;
  return isPalindrome(str, index - 1, (reversed += str[index]));
}
isPalindrome("madam");

// 🏠 Homework Questions
// 1️⃣ Find the Length of a String Using Recursion
// Input: "javascript"
// Output: 10

function findLength(str, index = 0) {
  if (str.length === index) return 0;
  return 1 + findLength(str, index + 1);
}
findLength("javascript");

// 2️⃣ Count the Number of Vowels in a String Using Recursion
// Input: "education"
// Output: 5

function findVowel(str, index = 0) {
  if (str.length === index) return 0;
  const vowels = "AEIOUaeiou";
  if (vowels.includes(str[index])) return 1 + findVowel(str, index + 1);
  return findVowel(str, index + 1);
}
findVowel("education");

// 3️⃣ Find the First Occurrence of an Element in an Array Using Recursion
// Input: [5, 3, 7, 3, 9], element = 3
// Output: index 1

function firstOccurrence(arr, target, index = 0) {
  if (arr.length === index) return -1;
  if (arr[index] === target) return index;
  return firstOccurrence(arr, target, index + 1);
}
firstOccurrence([5, 3, 7, 3, 9], 3);

// 4️⃣ Find the Last Occurrence of an Element in an Array Using Recursion
// Input: [5, 3, 7, 3, 9], element = 3
// Output: index 3

function lastOccurrence(arr, target, index = arr.length - 1) {
  if (0 > index) return -1;
  if (arr[index] === target) return index;
  return lastOccurrence(arr, target, index - 1);
}
lastOccurrence([5, 3, 7, 3, 9], 3);

// 5️⃣ Count How Many Times a Character Appears in a String Using Recursion
// Input: "recursion", character = 'r'
// Output: 2

function findChar(str, char, index = 0) {
  if (str.length === index) return 0;
  if (str[index] === char) return 1 + findChar(str, char, index + 1);
  return findChar(str, char, index + 1);
}
findChar("recursion", "r");

// 6️⃣ Replace All Occurrences of a Character in a String Using Recursion
// Input: "banana", replace 'a' with 'x'
// Output: "bxnxnx"

function replaceChar(str, char, replace, index = 0) {
  if (str.length === index) return "";
  const currChar = str[index] === char ? replace : str[index];
  return currChar + replaceChar(str, char, replace, index + 1);
}
replaceChar("banana", "a", "x");

// 7️⃣ Check if All Elements in an Array Are Even Using Recursion
// Input: [2, 4, 6, 8]
// Output: true

function isEven(arr, index = 0) {
  if (arr.length === index) return true;
  if (arr[index] % 2 !== 0) return false;
  return isEven(arr, index + 1);
}
isEven([2, 4, 6, 8]);

// 8️⃣ Find the Maximum Element in an Array Using Recursion
// Input: [7, 3, 9, 2, 5]
// Output: 9

function findMax(arr, index = 0, curr = arr[0]) {
  if (arr.length - 1 === index) return curr;
  if (arr[index] > curr) curr = arr[index];
  return findMax(arr, index + 1, curr);
}
findMax([7, 3, 9, 2, 5]);
