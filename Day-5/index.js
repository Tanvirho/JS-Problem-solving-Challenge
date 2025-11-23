// 🎯 Day 5 – Factors & Multiples
// 🧩 Core Concept Focus
// Understanding factors and multiples
// Relationship between HCF and LCM
// Strengthening number theory concepts using loops, modulo, and basic arithmetic
// 🏫 Class Questions

// 1.Print All Factors of a Number

// Input: N = 24
// Output: [1, 2, 3, 4, 6, 8, 12, 24]

// function allFactors(num) {
//   const factors = [];
//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       factors.push(i);
//     }
//   }
//   return factors;
// }
// console.log(allFactors(24));

// or

// function allFactors(num) {
//   const factors = [];
//   for (let i = 1; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       factors.splice(factors.length / 2, 0, i);
//       const otherPart = num / i;
//       if (i !== otherPart) factors.splice(factors.length / 2 + 1, 0, otherPart);
//     }
//   }
//   return factors;
// }
// console.log(allFactors(24));

// 2. Print All Multiples of a Number up to N

// Input: Number = 4, Limit = 30
// Output: [4, 8, 12, 16, 20, 24, 28]

// function allMultiples(num, limit) {
//   const multiples = [];
//   for (let i = num; i <= limit; i += num) {
//     multiples.push(i);
//   }
//   return multiples;
// }
// console.log(allMultiples(4, 30));

// 3.Find the HCF (Highest Common Factor) or GCD of Two Numbers

// Input: 12, 18
// Output: HCF = 6

// function highestCommonFactor(a, b) {
//   let hcf;
//   for (let i = 1; i <= a && i <= b; i++) {
//     if (a % i === 0 && b % i === 0) {
//       hcf = i;
//     }
//   }
//   return hcf;
// }
// highestCommonFactor(12, 18);

// or

// function highestCommonFactor(a, b) {
//   const factors = [];
//   for (let i = 1; i <= Math.sqrt(a); i++) {
//     if (a % i === 0) {
//       factors.splice(factors.length / 2, 0, i);
//       let otherPart = a / i;
//       if (otherPart !== i) factors.splice(factors.length / 2 + 1, 0, otherPart);
//     }
//   }
//   for (let j = factors.length; j >= 1; j--) {
//     if (b % factors[j] === 0) {
//       return factors[j];
//     }
//   }
// }
// console.log(highestCommonFactor(12, 18));

// or batter one

// function highestCommonFactor(a, b) {
//   let divisor = a > b ? b : a;
//   let dividend = a > b ? a : b;

//   while (dividend % divisor !== 0) {
//     const remainder = dividend % divisor;
//     dividend = divisor;
//     divisor = remainder;
//   }

//   return divisor;
// }
// console.log(highestCommonFactor(12, 18));

// 4.Find the LCM (Least Common Multiple) of Two Numbers

// Input: 12, 18
// Output: LCM = 36

// function highestCommonFactor(a, b) {
//   let divisor = a > b ? b : a;
//   let dividend = a > b ? a : b;

//   while (dividend % divisor !== 0) {
//     const remainder = dividend % divisor;
//     dividend = divisor;
//     divisor = remainder;
//   }
//   const lcm = (a * b) / divisor;
//   return lcm
// }
// console.log(highestCommonFactor(12, 18));

// 5.Count the Total Number of Factors of a Number

// Input: N = 24
// Output: 8 Factors

// function totalFactors(num) {
//   const factors = [];
//   for (let i=1; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       factors.splice(factors.length / 2, 0, i);
//       let otherPart = num / i;
//       if (otherPart !== i) factors.splice(factors.length / 2 + 1, 0, otherPart);
//     }
//   }
//   return factors.length;
// }
// console.log(totalFactors(24));

// 6.Sum of All Factors of a Number

// Input: N = 12
// Output: Sum = 28

// function sumOfFactors(num) {
//   const factors = [];
//   let sum = 0;
//   for (let i = 1; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       sum += i;
//       factors.splice(factors.length / 2, 0, i);
//       let otherPart = num / i;
//       if (otherPart !== i) {
//         sum += otherPart;
//         factors.splice(factors.length / 2 + 1, 0, otherPart);
//       }
//     }
//   }
//   console.log(factors);
//   return sum;
// }
// console.log(sumOfFactors(12));

// 7.ind the Greatest Factor of a Number (Other Than Itself)

// Input: N = 36
// Output: 18

// function greatestFactor(num) {
//   for (let i = Math.floor(num / 2); i >= 0; i--) {
//     if (num % i === 0) {
//       return i;
//     }
//   }
// }
// console.log(greatestFactor(36));

// 8.Check if a Number is a Perfect Number

// Input: N = 28
// Output: Perfect Number
// If sum of all proper divisors = number → Perfect Number.

// function perfectNumber(num) {
//   let sum =0
//   for(let i = 1 ; i<= num/2; i++){
//     if(num%i === 0){
//       sum += i
//     }
//   }
//   return sum === num
// }
// console.log(perfectNumber(28))

// 5.Find the HCF and LCM of Three Numbers

// Input: 8, 12, 16
// Output: HCF = 4, LCM = 48

// function getHcl(a, b) {
//   let divisor = a < b ? a : b;
//   let divided = a > b ? a : b;
//   while (divided % divisor !== 0) {
//     let remainder = divided % divisor;
//     divided = divisor;
//     divisor = remainder;
//   }

//   return divisor;
// }

// function getLcm(a, b) {
//   return (a * b) / getHcl(a, b);
// }

// function foundHcfAndLcm(...numbers) {
//   const hcf = numbers.reduce((acc, num) => getHcl(acc, num));
//   const lcm = numbers.reduce((acc, num) => getLcm(acc, num));

//   return { hcf, lcm };
// }

// console.log(foundHcfAndLcm(8, 12, 16));
// console.log(foundHcfAndLcm(8, 12, 16, 20, 24, 28, 32, 36, 40, 44));
