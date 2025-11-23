// 🎯 Day 2 – Conditions & Logic

// 1. Find the Maximum of Three Numbers

// Input: 10 20 5
// Output: 20
// ✨ Teaches nested or chained conditional logic and comparative reasoning.

// const a = 10;
// const b = 20;
// const c = 5;

// if (a >= b && a >= c) {
//   console.log(a);
// } else if (b >= a && b >= c) {
//   console.log(b);
// } else {
//   console.log(c);
// }

// 2. Check if a Number is Positive, Negative, or Zero

// Input: -9
// Output: Negative
// ✨ Practices multi-branch conditions and comparison operators.

// const input = 9

// switch (true) {
//   case (input < 0):
//     console.log("Negative");
//     break;
//   case (input === 0):
//     console.log("Zero");
//     break;
//   case input > 0:
//     console.log("Positive");
//     break;
// } or

// if(input < 0){
//     console.log("Negative");
// }
// else if(input === 0){
//     console.log("Zero");
// }
// else {
//     console.log("Positive");
// }

// 3.Calculate Electricity Bill
// Input: Units = 230

// Output: Total Bill = ₹1500

// ✨ Applies multiple ranges using chained else if and cumulative logic.

// Example Logic:

// 0–100 units → ₹5 per unit
// 101–200 units → ₹7 per unit
// 201–300 units → ₹10 per unit
// Above 300 units → ₹12 per unit
// 🔍 Teaches: cumulative calculation + condition chaining.

// const Units = 230;

// if (Units <= 100) {
//   console.log(`₹${Units * 5}`);
// } else if (Units <= 200) {
//   console.log(`₹${100 * 5 + (Units - 100) * 7}`);
// } else if (Units <= 300) {
//   console.log(`₹${100 * 5 + 100 * 7 + (Units - 200) * 10}`);
// } else {
//   console.log(`₹${100 * 5 + 100 * 7 + 100 * 10 + (Units - 300) * 12}`);
// }

// 4.Check if a Character is a Vowel or Consonant

// Input: e
// Output: Vowel
// ✨ Combines logical OR (||) operator and string comparisons.

// const Input = "e";
// const char = Input.toLocaleLowerCase();

// if (
//   char === "a" ||
//   char === "e" ||
//   char === "i" ||
//   char === "o" ||
//   char === "u"
// ) {
//   console.log("Vowel");
// } else if (char >= "a" && char <= "z") {
//   console.log("Consonant");
// } else {
//   console.log("Not a valid character");
// }

// 5. Check if a Year is a Leap Year

// Input: 2024
// Output: Leap Year
// ✨ Builds compound condition logic using multiple if statements (%4, %100, %400).
// A year is a leap year if it satisfies these conditions:

// It is divisible by 4,
// ➜ year % 4 === 0
// But not divisible by 100,
// ➜ year % 100 !== 0
// Unless it is also divisible by 400,
// ➜ year % 400 === 0
// 🧩 In Simple Words

// If a year is divisible by 4, it’s a leap year.
// Except if it’s also divisible by 100, then it’s not a leap year.
// But if it’s divisible by 400, it is a leap year again.

// const year = 2025;

// if (year % 4 === 0 || year % 400 === 0 && year % 100 !== 0) {
//   console.log("Leap Year");
// } else {
//   console.log("Not a Leap Year");
// }

// 6. Check if a Character is Uppercase, Lowercase, Digit, or Special Character

// Input: A
// Output: Uppercase Letter
// ✨ Teaches use of character code ranges (charCodeAt) and compound logical conditions.
// 🔍 Concepts: ASCII range checks, compound && and || operators.

// const Input = "A";
// const charCode = Input.charCodeAt();

// if (charCode >= 97 && charCode <= 122) {
//   console.log("Lowercase");
// } else if (charCode >= 65 && charCode <= 90) {
//   console.log("Uppercase");
// } else if (charCode >= 48 && charCode <= 57) {
//   console.log("Digit");
// } else {
//   console.log("Special Character");
// }

// 7. Check Triangle Type Using Sides and Angles
// Input: Sides = 3, 4, 5

// Output: Right-Angled Triangle

// ✨ Combines geometric reasoning + Pythagoras theorem check.

// Example Logic:

// If a² + b² = c² → Right-angled
// Else if all sides equal → Equilateral
// Else if any two equal → Isosceles
// Else → Scalene

// const a = 3;
// const b = 4;
// const c = 5;

// if (a ** 2 + b ** 2 === c ** 2) {
//   console.log("Right-angled");
// } else if (a === b && b === c) {
//   console.log("Equilateral");
// } else if (a === b || b === c) {
//   console.log("Isosceles");
// } else {
//   console.log("Scalene");
// }

// 8.Calculate Income Tax Based on Slabs
// Input: Income = ₹7,50,000

// Output: Tax = ₹62,500

// ✨ Applies progressive slab logic similar to electricity bill but with financial context.

// Example Logic (example slabs):

// Up to ₹2,50,000 → No tax
// ₹2,50,001 – ₹5,00,000 → 5%
// ₹5,00,001 – ₹10,00,000 → 20%
// Above ₹10,00,000 → 30%

// const Income = 750000;

// if (Income <= 250000) {
//   console.log("No Tax");
// } else if (Income <= 500000) {
//   console.log(`₹${((Income - 250000) * 5) / 100}`);
// } else if (Income <= 1000000) {
//   console.log(`₹${(250000 * 5) / 100 + ((Income - 500000) * 20) / 100}`);
// } else {
//   console.log(
//     `₹${
//       (250000 * 5) / 100 + (500000 * 20) / 100 + ((Income - 1000000) * 30) / 100
//     }`
//   );
// }
