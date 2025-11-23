// 🎯 Day 3 – Loops & Patterns
// 🧩 Core Concept Focus
// Nested Loops
// Pattern Printing with Logic and Symmetry
// Understanding iteration depth for shapes and designs
// 🧠 Questions List
// 1.Print Right-Angled Star Triangle

// Input: Rows = 5

// Output:

// *
// **
// ***
// ****
// *****
// ✨ Teaches nested loops and increasing sequence printing.

// const N = 5;

// for (let i = 1; i <= N; i++) {
//   let star = "";
//   for (let j = 1; j <= i; j++) {
//     star = star + "*";
//   }
//   console.log(star);
// }

// 2.Print Inverted Right-Angled Triangle

// Input: Rows = 5

// Output:

// *****
// ****
// ***
// **
// *
// ✨ Reinforces decreasing nested loop structure.

// const N = 5;

// for (let i = N; i >= 1; i--) {
//   let star = "";
//   for (let j = i; j >= 1; j--) {
//     star = star + "*";
//   }
//   console.log(star);
// }

// 3.Print Pyramid Pattern

// Input: Rows = 5

// Output:

//     *
//    ***
//   *****
//  *******
// *********
// ✨ Teaches alignment using spaces and nested loops.

// const N = 5;

// for (let i = 1; i <= N; i++) {
//   star = "";

//   for (let j = 1; j <= N - i; j++) {
//     star += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     star += "*";
//   }
//   console.log(star);
// }

// 4.Print Inverted Pyramid Pattern

// Input: Rows = 5

// Output:

// *********
//  *******
//   *****
//    ***
//     *
// ✨ Teaches reverse space-star pattern alignment.

// const N = 5;

// for (let i = 1; i <= N; i++) {
//   star = "";

//   for (let j = 1; j <= i - 1; j++) {
//     star += " ";
//   }
//   for (let k = 1; k <= 2 * (N - i) + 1; k++) {
//     star += "*";
//   }
//   console.log(star);
// }

// 5. Print Hollow Square Pattern

// Input: Rows = 5

// Output:

// *****
// *   *
// *   *
// *   *
// *****
// ✨ Practices conditional printing within nested loops.

// const row = 5;

// for (let i = 1; i <= row; i++) {
//   let star = "";
//   for (let j = 1; j <= row; j++) {
//     if (i === 1 || i === row || j === 1 || j === row) {
//       star += "*";
//     } else {
//       star += " ";
//     }
//   }
//   console.log(star);
// }
// 6.Print Hollow Pyramid Pattern

// Input: Rows = 5

// Output:

//     *
//    * *
//   *   *
//  *     *
// *********
// ✨ Combines conditionals and symmetrical logic in loops.

// const row = 5;

// for (let i = 1; i <= row; i++) {
//   let star = "";
//   for (let j = 1; j <= row - i; j++) {
//     star += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     if (i === 1 || i === row || k === 1 || k === 2 * i - 1) {
//       star += "*";
//     } else {
//       star += " ";
//     }
//   }
//   console.log(star);
// }

// 7. Print Alternating Binary Triangle

// Input: Rows = 5

// Output:

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1
// ✨ Combines parity logic with nested loops.

// const row = 5;

// for (let i = 1; i <= row; i++) {
//   let star = "";
//   for (let j = 1; j <= i; j++) {
//     star += (i + j) % 2 === 0 ? "1 " : "0 ";
//   }
//   console.log(star);
// }

// 8. Print Hollow Inverted Pyramid

// Input: Rows = 5

// Output:

// *********
//  *     *
//   *   *
//    * *
//     *
// ✨ Focuses on conditionally printing edges and spaces.

// const row = 5;

// for (let i = 1; i <= row; i++) {
//   let star = "";
//   for (let j = 1; j <= i - 1; j++) {
//     star += " ";
//   }
//   for (let k = 1; k <= 2 * (row - i) + 1; k++) {
//     if (i === 1 || i === row || k === 1 || k === 2 * (row - i) + 1) {
//       star += "*";
//     } else {
//       star += " ";
//     }
//   }
//   console.log(star);
// }

// 9.Print Butterfly Pattern

// Input: Rows = 5

// Output:

// *       *
// **     **
// ***   ***
// **** ****
// *********
// **** ****
// ***   ***
// **     **
// *       *
// ✨ Combines multiple sections with symmetry logic.

// const row = 5;

// for (let i = 1; i <= 2 * row - 1; i++) {
//   let star = "";
//   const line = i <= row ? i : 2 * row - i;
//   for (let j = 1; j <= line; j++) {
//     star += "*";
//   }
//   for (k = 1; k <= 2 * (row - line); k++) {
//     star += " ";
//   }
//   for (let l = 1; l <= line; l++) {
//     star += "*";
//   }

//   console.log(star);
// }

// 10.Input: Rows = 3

// Output:

//     *
//    ***
//   *****
//    ***
//     *
// ✨ Combines upper and lower pyramid logic for symmetry.

// const row = 3;

// for (let i = 1; i <= 2 * row - 1; i++) {
//   let star = "";
//   const line = i <= row ? 2 * i - 1 : 2 * (2 * row - i) - 1;
//   const space = i <= row ? row - i : i - row;
//   for (let j = 1; j <= space; j++) {
//     star += " ";
//   }
//   for (let k = 1; k <= line; k++) {
//     star += "*";
//   }
//   console.log(star);
// }

// 11.Print Hourglass Pattern

// Input: Rows = 5

// Output:

// *********
//  *******
//   *****
//    ***
//     *
//    ***
//   *****
//  *******
// *********
// ✨ Practices combining inverse loops and symmetrical shapes.

// const row = 5;

// for (let i = 1; i <= 2 * row - 1; i++) {
//   let star = "";
//   let line = i <= row ? 2 * (row - i) + 1 : 2 * (i - row) + 1;
//   let space = i <= row ? i - 1 : 2 * row - i - 1;
//   for (let j = 1; j <= space; j++) {
//     star += " ";
//   }
//   for (let k = 1; k <= line; k++) {
//     star += "*";
//   }
//   console.log(star);
// }

// 12. Print Hollow Diamond Pattern

// Input: Rows = 3

// Output:

//     *
//    * *
//   *   *
//    * *
//     *
// ✨ Teaches combining upward and downward hollow pyramids.

// const row = 3;

// for (let i = 1; i <= 2 * row - 1; i++) {
//   let star = "";
//   const line = i <= row ? 2 * i - 1 : 2 * (2 * row - i) - 1;
//   const space = i <= row ? row - i : i - row;
//   for (let j = 1; j <= space; j++) {
//     star += " ";
//   }
//   for (let k = 1; k <= line; k++) {
//     if (i === 1 || i === line || k === 1 || k === line) {
//       star += "*";
//     } else {
//       star += " ";
//     }
//   }
//   console.log(star);
// }

// 13.Print Rhombus Pattern

// Input: Rows = 5

// Output:

//     *****
//    *****
//   *****
//  *****
// *****
// ✨ Practices offset alignment for uniform patterns.

// const row = 5;

// for (let i = 1; i <= row; i++) {
//   star = "";
//   for (let j = 1; j <= row - i; j++) {
//     star += " ";
//   }
//   for (let k = 1; k <= row; k++) {
//     star += "*";
//   }
//   console.log(star);
// }

// 14. Print Multiplication Table (Single and Upto N)

// Input 1: Number = 5

// Output:

// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50
// Input 2: Upto = 3

// Output:

// Table of 1
// 1 x 1 = 1
// ...
// Table of 3
// 3 x 10 = 30
// ✨ Practices simple and nested loops for repetitive operations.

// const number = 5;

// for (let i = 1; i <= 10; i++) {
//   let table = number * i;
//   console.log(`${number} X ${i} = ${table}`);
// }
