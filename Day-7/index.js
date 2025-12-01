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

primeFactorization(84);

// 2. Factorization in Exponent Form
// Input: N = 360
// Output: "2^3 × 3^2 × 5^1"

function factorizationInExponent(num) {
  const factors = {};
  while (num % 2 === 0) {
    factors[2] = (factors[2] || 0) + 1;
    num = num / 2;
  }
  let divider = 3;
  while (num % divider === 0) {
    factors[divider] = (factors[divider] || 0) + 1;
    num = num / divider;
  }
  divider++;
  if (num > 2) factors[num] = (factors[num] || 0) + 1;
  let output = "";
  Object.keys(factors).forEach((key, i) => {
    output +=
      `${key}^${factors[key]}` +
      (i !== Object.keys(factors).length - 1 ? " X " : "");
  });
  return output;
}
factorizationInExponent(360);

// 3. Distinct Prime Factor Count
// Input: N = 100
// Output: Distinct Prime Factors = 2 (Because 100 → 2, 5)

function distinctFactorization(num) {
  const factors = {};
  while (num % 2 === 0) {
    factors[2] = (factors[2] || 0) + 1;
    num = num / 2;
  }
  let divider = 3;
  while (num % divider === 0) {
    factors[divider] = (factors[divider] || 0) + 1;
    num = num / divider;
  }
  divider++;
  if (num > 2) factors[num] = (factors[num] || 0) + 1;

  return Object.keys(factors).length;
}
distinctFactorization(100);

// 4. Check if a Number Is a Powerful Number
// A number is powerful if every prime factor appears with an exponent ≥ 2.

// Input: N = 36
// Output: Powerful Number (36 → 2² × 3² → all exponents ≥ 2)

function powerfulNumber(num) {
  const factors = {};
  while (num % 2 === 0) {
    factors[2] = (factors[2] || 0) + 1;
    num = num / 2;
  }
  let divider = 3;
  while (num % divider === 0) {
    factors[divider] = (factors[divider] || 0) + 1;
    num = num / divider;
  }
  divider++;
  if (num > 2) factors[num] = (factors[num] || 0) + 1;

  return Math.min(...Object.values(factors)) >= 2;
}
powerfulNumber(36);
