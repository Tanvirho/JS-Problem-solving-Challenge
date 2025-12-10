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
    factor += 2;
  }
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
  divider += 2;
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
  divider += 2;
  if (num > 2) factors[num] = (factors[num] || 0) + 1;

  return Math.min(...Object.values(factors)) >= 2;
}
powerfulNumber(36);

// 5. Find the Product of All Distinct Prime Factors
// Input: N = 150
// Output: Product = 2 × 3 × 5 = 30

function allDistinctPrimeFactors(num) {
  const primeFactors = {};
  while (num % 2 === 0) {
    primeFactors[2] = (primeFactors[2] || 0) + 1;
    num = num / 2;
  }
  let divider = 3;
  while (divider <= Math.sqrt(num)) {
    while (num % divider === 0) {
      primeFactors[divider] = (primeFactors[divider] || 0) + 1;
      num = num / divider;
    }
    divider += 2;
  }
  if (num > 2) primeFactors[num] = (primeFactors[num] || 0) + 1;
  const keys = Object.keys(primeFactors);
  let answer = 1;
  for (const number of keys) {
    answer *= number;
  }
  return answer;
}
allDistinctPrimeFactors(150);

// 6. Check if a Number Is a Square-Free Number
// A number is square-free if none of its prime factors repeat.

// Input: N = 30
// Output: Square-Free Number (2 × 3 × 5 → no repeats)

function squareFreeNumber(num) {
  const primeFactors = {};
  while (num % 2 === 0) {
    primeFactors[2] = (primeFactors[2] || 0) + 1;
    num = num / 2;
  }
  let divider = 3;
  while (divider <= Math.sqrt(num)) {
    while (num % divider === 0) {
      primeFactors[divider] = (primeFactors[divider] || 0) + 1;
      num = num / divider;
    }
    divider += 2;
  }
  if (num > 2) primeFactors[num] = (primeFactors[num] || 0) + 1;
  return Math.max(...Object.values(primeFactors)) === 1;
}
squareFreeNumber(30);

// 7. Check if a Number Is a Smith Number
// A composite number whose sum of digits = sum of digits of prime factors.
// Input: N = 666
// Output: Smith Number

function smithNumber(num) {
  if (isPrime(num)) return false;
  const sum = sumOfDigits(num);
  let primeFactor = 0;
  while (num % 2 === 0) {
    primeFactor += 2;
    num = num / 2;
  }
  let divider = 3;
  while (divider <= Math.sqrt(num)) {
    while (num % divider === 0) {
      primeFactor += sumOfDigits(divider);
      num = num / divider;
    }
    divider += 2;
  }
  if (num > 2) primeFactor += sumOfDigits(num);
  return primeFactor === sum;
}

function sumOfDigits(N) {
  const digits = [];
  while (N > 0) {
    digits.unshift(N % 10);
    N = Math.floor(N / 10);
  }
  let sum = 0;
  for (const number of digits) {
    sum += number;
  }
  return sum;
}
function isPrime(N) {
  if (N < 2) return false;
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) return false;
  }
  return true;
}
smithNumber(666);

// 8. Check if a Number Is an Ugly Number
// Ugly numbers have only 2, 3, 5 as prime factors.

// Input: N = 18
// Output: Not Ugly (Because 18 → 2 × 3 × 3 → allowed)
// Input: N = 14
// Output: Not Ugly (Contains 7)

function uglyNumber(num) {
  if (num <= 0) return false;
  if (num === 1) return true;
  if (num > 5 && isPrime(num)) return false;
  const factors = {};
  while (num % 2 === 0) {
    factors[2] = (factors[2] || 0) + 1;
    num = num / 2;
  }
  let divider = 3;
  while (divider <= Math.sqrt(num)) {
    while (num % divider === 0) {
      if (divider > 5) return false;
      factors[divider] = (factors[divider] || 0) + 1;
      num = num / divider;
    }
    divider += 2;
  }
  if (num > 5) return false;
  if (num > 2) factors[num] = (factors[num] || 0) + 1;
  return true;
}
function isPrime(N) {
  if (N < 2) return false;
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) return false;
  }
  return true;
}

// or

function uglyNumber(num) {
  if (num <= 0) return false;
  while (num % 2 === 0) num /= 2;
  while (num % 3 === 0) num /= 3;
  while (num % 5 === 0) num /= 5;
  return num === 1;
}
uglyNumber(18);

// 9. Check if a Number Is a Kaprekar Number
// Square the number → split → sum should give the original number.

// Input: N = 45
// Output: Kaprekar Number (45² = 2025 → 20 + 25 = 45)

function kaprekarNumber(num) {
  const square = num * num;
  const string = square.toString();
  const part_1 = Number(string.slice(0, string.length / 2));
  const part_2 = Number(string.slice(string.length / 2, string.length));
  const sum = part_1 + part_2;
  return sum === num;
}
kaprekarNumber(45);

// 10. Check if a Number Is a Happy Number
// Repeatedly replace the number with the sum of squares of its digits. If it becomes 1, it is Happy.

// Input: N = 19
// Output: Happy Number

function happyNumber(num) {
  let current = splice(num);
  // Magic 4 Rule:
  // If a number is NOT Happy, it will eventually enter a loop that contains 4.
  // So we just check: is it 1 (Happy)? Or did we hit 4 (Not Happy)?
  while (current !== 1 && current !== 4) {
    current = splice(current);
  }
  return current === 1;
}
function splice(N = 4) {
  let sum = 0;
  while (N > 0) {
    const digit = N % 10;
    N = Math.floor(N / 10);
    sum += digit * digit;
  }
  return sum;
}
happyNumber(19);

// 11. Number Base Conversion (Any Base to Any Base)
// Input: Number = "101101", From Base = 2, To Base = 10
// Output: 45

function baseConversion(num, base1, base2) {
  const digits = [];
  const digits2 = [];
  let decimal = 0;
  while (num > 0) {
    const digit = num % 10;
    num = Math.floor(num / 10);
    digits.push(digit);
  }
  for (let i = 0; i < digits.length; i++) {
    decimal += digits[i] * base1 ** i;
  }
  if (base2 === 10) return decimal;
  if (base2 === 0) return 0;

  if (base2 === 16) {
    while (decimal > 0) {
      const remainder = decimal % base2;
      decimal = Math.floor(decimal / base2);
      if (remainder === 10) digits2.unshift("A");
      else if (remainder === 11) digits2.unshift("B");
      else if (remainder === 12) digits2.unshift("C");
      else if (remainder === 13) digits2.unshift("D");
      else if (remainder === 14) digits2.unshift("E");
      else if (remainder === 15) digits2.unshift("F");
      else digits2.unshift(remainder);
    }
    return digits2.join("");
  } else {
    while (decimal > 0) {
      const remainder = decimal % base2;
      decimal = Math.floor(decimal / base2);
      digits2.unshift(remainder);
    }
    return Number(digits2.join(""));
  }
}
console.log(baseConversion(101101, 2, 10));

// 12. Swap Variable without using third variable
// Input: a = 5, b = 6
// Output: a = 6, b = 5

function swapVariable(a, b) {
  return { a: b, b: a };
}
swapVariable(5, 6);
