// 🎯 Day 17 – Introduction to Recursion
// 🧩 Core Concept Focus
// Understanding what recursion is
// Base case vs recursive case
// How recursive calls work
// Visualizing the call stack
// Preventing infinite recursion
// Replacing simple loops with recursion
// 🏫 Class Questions
// 1️⃣ Print Numbers from 1 to N Using Recursion
// Input: N = 5
// Output: 1 2 3 4 5

function printNum(num) {
  if (num === 0) return;
  printNum(num - 1);
  console.log(num);
}
printNum(5);

// 2️⃣ Print Numbers from N to 1 Using Recursion
// Input: N = 5
// Output: 5 4 3 2 1

function printFromN(num) {
  if (num === 0) return;
  // console.log(num);
  printFromN(num - 1);
}
printFromN(5);

// 3️⃣ Find Factorial of a Number Using Recursion
// Input: N = 5
// Output: 120

function findFactorial(num) {
  if (num <= 1) return 1;
  return num * findFactorial(num - 1);
}
findFactorial(5);

// 4️⃣ Find the Sum of First N Natural Numbers Using Recursion
// Input: N = 4
// Output: 10

function findSum(num) {
  if (num <= 1) return 1;
  return num + findSum(num - 1);
}
findSum(4);

// 5️⃣ Calculate Power Using Recursion
// Input: a = 2, n = 5
// Output: 32 (Compute aⁿ recursively.)

function calculatePower(a, n) {
  if (n === 0) return 1;
  return a * calculatePower(a, n - 1);
}
calculatePower(2, 5);

// 🏠 Homework Questions
// 1️⃣ Find the Sum of Digits of a Number Using Recursion
// Input: N = 1234
// Output: 10

function sumOfDigits(num) {
  if (num === 0) return 0;
  return (num % 10) + sumOfDigits(Math.floor(num / 10));
}
sumOfDigits(1234);

// 2️⃣ Reverse a Number Using Recursion
// Input: N = 123
// Output: 321

function reverseNum(num, rev = 0) {
  if (num === 0) return rev;
  return reverseNum(Math.floor(num / 10), rev * 10 + (num % 10));
}
reverseNum(123);

// 3️⃣ Find the Product of Digits of a Number Using Recursion
// Input: N = 234
// Output: 24

function productOfDigits(num) {
  if (num === 0) return 1;
  return (num % 10) * productOfDigits(Math.floor(num / 10));
}
productOfDigits(234);

// 4️⃣ Check if a Number is Palindrome Using Recursion
// Input: N = 121
// Output: Palindrome

function reverseNumber(num, rev = 0) {
  if (num === 0) return rev;
  return reverseNumber(Math.floor(num / 10), rev * 10 + (num % 10));
}

function isPalindrome(num) {
  if (num < 0) return false;
  return num === reverseNumber(num);
}
isPalindrome(121);

// 5️⃣ Count How Many Zeros Are Present in a Number Using Recursion
// Input: N = 102030
// Output: 3
function countZeros(num) {
  if (num === 0) return 0;
  const lastDigit = num % 10;
  const count = countZeros(Math.floor(num / 10));
  return (lastDigit === 0 ? 1 : 0) + count;
}
countZeros(102030);

// 6️⃣ Print All Natural Numbers Between Two Given Numbers Using Recursion
// Input: start = 3, end = 8
// Output: 3 4 5 6 7 8

function printNaturalNumbers(start, end) {
  if(start > end) return;
  console.log(start);
 return printNaturalNumbers(start+1, end);
}
printNaturalNumbers(3,8);

// 7️⃣ Find the Sum of Even Numbers from 1 to N Using Recursion
// Input: N = 10
// Output: 30

function sumOfEvenNumbers(num) {
  if(num < 2) return 0;
  if(num % 2 !== 0) num--;
  return num + sumOfEvenNumbers(num - 2);
}
sumOfEvenNumbers(10);