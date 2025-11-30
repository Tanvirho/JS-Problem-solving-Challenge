// 🎯 Day 7 – Prime Factorization & Composite Numbers
// 🧩 Core Concept Focus
// Understanding prime factorization
// Identifying distinct prime factors
// Classification of numbers using their factor patterns
// Strengthening number theory reasoning using loops, modulo, and mathematical logic
// 🏫 Class Questions

// 1. Find the Prime Factorization (Return as an Array)
// Input: N = 84
// Output: [2, 2, 3, 7]

function primeFactorization(num) {
  const prime = [];
  let factor = 2;
  while (factor <= Math.sqrt(num)) {
    while (num % factor === 0) {
      prime.push(factor);
      num = num / factor;
    }
    factor++;
  }
  if (num > 2) prime.push(num);
  return prime;
}

// or

function primeFactorization(num) {
  const prime = [];

  while (num % 2 === 0) {
    prime.push(2);
    num = num / 2;
  }
  let factor = 3;
  while (factor <= Math.sqrt(num)) {
    while (num % factor === 0) {
      prime.push(factor);
      num = num / factor;
    }
  }
  factor += 2;
  if (num > 2) prime.push(num);
  return prime;
}

primeFactorization(84)

// 2. Factorization in Exponent Form
// Input: N = 360
// Output: "2^3 × 3^2 × 5^1"
