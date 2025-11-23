// 🎯 Day 4 B – Digits & Numbers
// 🧩 Core Concept Focus
// Working with digits using arithmetic operations
// Extracting and analyzing digits using % and /
// Building logic around numbers and digit patterns
// Using loops and conditional statements for numerical problems
// Strengthening mathematical and logical thinking
// 🧠 Questions List

// 1. Split Number into Digits

// Input: N = 12345
// Output: [1, 2, 3, 4, 5]
// ✨ Extract each digit mathematically using, and return them in an array. Do not use string operations.

// function splitNumberIntoDigits(num) {
//   const digits = [];
//   while (num > 0) {
//     digits.unshift(num % 10);
//     num = Math.floor(num / 10);
//   }
//   return digits;
// }

// console.log(splitNumberIntoDigits(12345));

// 2. Reverse a Number

// Input: N = 1234
// Output: 4321
// ✨ Teaches how to extract and reconstruct digits using % and /.

// function reverseDigits(num) {
//   const digits = [];
//   while (num > 0) {
//     digits.unshift(num % 10);
//     num = Math.floor(num / 10);
//   }
//   let reversNumber = 0;
//   for (let i = 0; i < digits.length; i++) {
//     reversNumber += digits[i] * 10 ** i;
//   }
//   return reversNumber;
// }

// console.log(reverseDigits(1234));

// 3.Remove the Decimal Point Mathematically

// Input: N = 12.34
// Output: 1234
// ✨ Do not use string operations.

// function removeDecimal(num) {
//   while (num !== Math.floor(num)) {
//     num *= 10;
//   }

//   return num;
// }
// console.log(removeDecimal(12.34));

// 4. Separate Whole and Fractional Parts of a Number

// Input: N = 5.75
// Output: Whole = 5, Fraction = 0.75
// ✨ Use mathematical logic to separate the integer and fractional portions without using built-in functions. Don't use Math.trunc() or Math.floor() method.

// function separateNumber (num){
//     const wholeNumber = Number(num - (num%1))
//     const fractionNumber = Number((num %1).toFixed(3))
//     return{wholeNumber , fractionNumber}
// }
// console.log(separateNumber(5.57))

// 5.Generate a Decimal Number from Whole and Fractional Digits

// Input: Whole = [1, 2], Fraction = [3, 4]
// Output: 12.34
// ✨ Form the number mathematically by combining the digits from both arrays using powers of 10.

// function generateDecimal(whole, fraction) {
//   let wholeDigits = 0;
//   let fractionDigits = 0;
//   for (let i = 0; i < whole.length; i++) {
//     wholeDigits += whole[i] * 10 ** (whole.length - i - 1);
//   }
//   for (let j = 0; j < fraction.length; j++) {
//     wholeDigits += fraction[j] * 10 ** (fraction.length - j - 3);
//   }
//   return wholeDigits + fractionDigits;
// }

// console.log(generateDecimal([1, 2], [3, 4]));

// 6.Check if a Number is a Palindrome

// Input: N = 121
// Output: Palindrome
// ✨ Compares original and reversed numbers to detect symmetry.

// function reversedNumber(num){
//     const N = num
//     const digits = []
//     while(num > 0){
//         digits.unshift(num%10)
//         num = Math.floor(num/10)
//     }
//     let reverse = 0
//     for(let i=0; i< digits.length; i++){
//         reverse += digits[i]*10**i
//     }
//     if(N === reverse){
//         console.log('Palindrome number')
//     }else{
//         console.log('not a Palindrome number')
//     }
//     return reverse
// }
// console.log(reversedNumber(121))

// 7. Check if a Number is an Armstrong Number (also called a Narcissistic Number)

// Input: N = 153
// Output: Armstrong Number
// ✨ Armstrong Number: 1³ + 5³ + 3³ = 153, 1⁴ + 6⁴ + 3⁴ + 4⁴ = 1634.

// function armstrongNumber(num){
//     const N = num
//     const digits = []
//     while(num > 0){
//         digits.unshift(num%10)
//         num = Math.floor(num/10)
//     }
//     let sum = 0
//     for(let i=0; i< digits.length; i++){
//         sum += digits[i]**digits.length
//     }
//     if(N === sum){
//         console.log('Armstrong Number')
//     }else{
//         console.log('not a Armstrong Number')
//     }
//     return sum
// }
// console.log(armstrongNumber(153))

// 8.Find the Sum of Digits

// Input: N = 987
// Output: 24
// ✨ Builds understanding of digit extraction and accumulation.

// function findSum(num) {
//   const digits = [];
//   while (num > 0) {
//     digits.push(num % 10);
//     num = Math.floor(num / 10);
//   }
//   let sum = 0;
//   for (let i = 0; i < digits.length; i++) {
//     sum += digits[i];
//   }
//   return sum;
// }
// console.log(findSum(987));

// 9.Find the Average of Digits

// Input: N = 4567
// Output: Average = 5.5
// ✨ Combines digit sum and count for average computation.

// function findAverage(num) {
//   const digits = [];
//   while (num > 0) {
//     digits.unshift(num % 10);
//     num = Math.floor(num / 10);
//   }
//   let sum = 0;
//   for (let i = 0; i < digits.length; i++) {
//     sum += digits[i] / digits.length;
//   }
//   return sum;
// }
// console.log(findAverage(4567));

// 10.Find the Largest and Smallest Digit in a Number

// Input: N = 9483
// Output: Largest = 9, Smallest = 3
// ✨ Enhances comparison logic using loops.

// function findLargeSml(num) {
//   const digits = [];
//   while (num > 0) {
//     digits.unshift(num % 10);
//     num = Math.floor(num / 10);
//   }
//   let largest = -1;
//   let smallest = 10;
//   for (let i = 0; i < digits.length; i++) {
//     if (largest < digits[i]) {
//       largest = digits[i];
//     }
//     if (smallest > digits[i]) {
//       smallest = digits[i];
//     }
//   }
//   return { largest, smallest };
// }
// console.log(findLargeSml(9483));

// 11.Check if a Number is a Strong Number

// Input: N = 145
// Output: Strong Number
// ✨ Applies factorial of each digit and sums them: 1! + 4! + 5! = 145.

// function strongNumber(num) {
//   const digits = [];
//   while (num > 0) {
//     digits.unshift(num % 10);
//     num = Math.floor(num / 10);
//   }
//   let sum = 1;
//   for (i = 1; i < digits.length; i++) {
//     let fact = 1;
//     for (let j = 2; j <= digits[i]; j++) {
//       fact *= j;
//     }
//     sum += fact;
//   }
//   return sum;
// }
// console.log(strongNumber(145));

// 12. Check if a Number is an Automorphic Number

// Input: N = 25
// Output: Automorphic Number (since 25² = 625 ends with 25)
// ✨ Practices modulus-based pattern matching.

// function automorphic(num) {
//   const N = num;
//   let pow = N ** 2;
//   const digits = [];
//   while (pow > 0) {
//     digits.push(pow % 10);
//     pow = Math.floor(pow / 10);
//   }
//   digits.pop();

//   let sum = 0;
//   for (let i = 0; i < digits.length; i++) {
//     sum += digits[i] * 10 ** i;
//   }

//   return sum === N;
// }
// automorphic(25);

// 13.Find the Frequency of Each Digit

// Input: N = 112233
// Output: 1 → 2, 2 → 2, 3 → 2
// ✨ Combines loops and conditionals for counting repetitions.

// function frequency(num) {
//   const digits = [];
//   while (num > 0) {
//     digits.unshift(num % 10);
//     num = Math.floor(num / 10);
//   }
//   const freq = {};

//   for (let i = 0; i < digits.length; i++) {
//     const digit = digits[i];
//     if (freq[digit]) {
//       freq[digit] = freq[digit] + 1;
//     } else {
//       freq[digit] = 1;
//     }
//   }

//   let result = "";
//   for (let key in freq) {
//     result += `${key} → ${freq[key]}\n`;
//   }

//   return result;
// }
// console.log(frequency(112233));

// 14.Check if a Number is a Harshad Number

// Input: N = 18
// Output: Harshad Number (since 18 is divisible by 1 + 8 = 9)
// ✨ Applies divisibility and digit-sum logic together.

// function harshadNumber(num) {
//   const N = num;
//   const digits = [];
//   while (num > 0) {
//     digits.unshift(num % 10);
//     num = Math.floor(num / 10);
//   }
//   let sum = 0;
//   for (let i = 0; i < digits.length; i++) {
//     sum += digits[i];
//   }

//   return N % sum === 0;
// }
// harshadNumber(18);

// 15.Count Whole and Fractional Digits Separately

// Input: N = 12.345
// Output: Whole Count = 2, Fraction Count = 3
// ✨ Separate the number into whole and fractional parts, then count digits in each part using pure math. Don't use Math.trunc() method.

// function separate(num) {
//   let whole = num >= 1 ? Math.floor(Math.log10(num)) + 1 : 1;
//   let fractional = num - Math.floor(num);
//   let fractionCount = 0;
//   const epsilon = 1e-10;

//   while (fractional > epsilon && fractionCount < 15) {
//     fractional *= 10;
//     let digit = Math.floor(fractional);
//     fractional -= digit;
//     fractionCount++;
//   }

//   return { whole, fractionCount };
// }
// console.log(separate(12.345));
