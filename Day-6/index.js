// 🎯 Day 6 – Prime & Fibonacci
// 🧩 Core Concept Focus
// Understanding prime numbers and divisibility logic
// Generating and analyzing the Fibonacci series
// Writing efficient code using loops, mathematical logic, and condition checks
// 🏫 Class Questions

// 1.Check if a Number is Prime

// Input: 7
// Output: Prime Number

function primeNumber(num) {
  let primeCounter = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      primeCounter++;
      let otherPart = num / i;
      if (otherPart !== 0) primeCounter++;
    }
  }
  return primeCounter === 2 ? "Prime" : "Not Prime";
}
console.log(primeNumber(7));

// 2.Check if two Numbers are Co-Prime

// Input: (7, 8)
// Output: Co-Prime

function coPrime(a, b) {
  let divided = a > b ? a : b;
  let divisor = a > b ? b : a;
  while (divided % divisor !== 0) {
    let remainder = divided % divisor;
    divided = divisor;
    divisor = remainder;
  }
  return divisor === 1;
}
console.log(coPrime(7, 8));

// 3.Print Fibonacci Series up to N Terms

// Input: N = 10
// Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

function fibonacci(num) {
  const series = [0, 1];
  for (let i = 2; i < num; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series;
}
console.log(fibonacci(10));

// 4.Find the Nth Fibonacci Number

// Input: N = 8
// Output: 13

function findFibonacci(num) {
  const series = [0n, 1n];
  for (let i = 2n; i < BigInt(num); i++) {
    series.push(series[i - 1n] + series[i - 2n]);
  }
  return series[series.length - 1];
}
console.log(findFibonacci(8));

// 5.Check if a Number Belongs to the Fibonacci Series

// Input: 21
// Output: Yes

function findFibonacciNumber(N) {
  const num = BigInt(N);
  const series = [0n, 1n];
  for (let i = 2n; true; i++) {
    const nextNumber = series[i - 1n] + series[i - 2n];
    if (num === nextNumber || num === 0n) return true;
    if (nextNumber > num) break;
    series.push(nextNumber);
  }
  return false;
}
console.log(findFibonacciNumber(21));

//  or

function findFibonacciNumber(num) {
  return (
    Number.isInteger(Math.sqrt(5 * num ** 2 + 4)) ||
    Number.isInteger(Math.sqrt(5 * num ** 2 - 4))
  );
}

// console.log(findFibonacciNumber(21));

// 6.Print All Prime Numbers up to N

// Input: N = 20
// Output: 2, 3, 5, 7, 11, 13, 17, 19

function allPrimeNumbersUpN(num) {
  const numbers = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      numbers.push(i);
    }
  }
  return numbers;
}
function isPrime(N) {
  if (N < 2) return false;
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) return false;
  }
  return true;
}
console.log(allPrimeNumbersUpN(20));

// 7.Sum of All Prime Numbers till N

// Input: N = 10
// Output: Sum = 17

function sumOfPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
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
console.log(sumOfPrimes(10));

// 8.Check if Two Numbers are Twin Primes

// Input: (3, 5)
// Output: Twin Primes

function isTwinPrimes(a, b) {
  const aIsPrime = isPrime(a);
  const bIsPrime = isPrime(b);
  if (!aIsPrime || !bIsPrime) return false;
  if (a - b === 2 || b - a === 2) return true;
  return false;
}
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isTwinPrimes(7, 11));

// 9.Print All Fibonacci Numbers up to a Given Limit

// Input: Limit = 100
// Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

function allFibonacciNumbers(num) {
  const fibonacci = [0n, 1n];
  const N = BigInt(num);
  for (let i = 2; i <= N; i++) {
    const numbers = fibonacci[i - 1] + fibonacci[i - 2];
    if (numbers > N) break;
    fibonacci.push(numbers);
  }
  return fibonacci;
}
console.log(allFibonacciNumbers(100));

// 10.Generate Fibonacci Numbers Within a Range

// Input: Start = 10, End = 100
// Output: 13, 21, 34, 55, 89

function fibonacciNumbersWithinRange(start, end) {
  const starting = [0n, 1n];
  const fibonacci = [];
  const a = BigInt(start);
  const b = BigInt(end);
  for (let i = 2; i <= b; i++) {
    const numbers = starting[i - 1] + starting[i - 2];
    if (numbers > b) break;
    starting.push(numbers);
    if (numbers >= a) fibonacci.push(numbers);
  }
  return fibonacci;
}
console.log(fibonacciNumbersWithinRange(10, 100));

// 11.Find the Sum of Even Fibonacci Numbers up to N Terms

// Input: N = 10
// Output: Sum = 44 (2 + 8 + 34)

function sumOfEvenFibonacci(num) {
  const N = BigInt(num);
  const fibonacci = [0n, 1n];
  let sum = 0n;
  for (let i = 2; i <= N; i++) {
    const numbers = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(numbers);
    if (numbers % 2n === 0n) sum += numbers;
  }
  return sum;
}
console.log(sumOfEvenFibonacci(10));

// 12.Check if the Sum of Two Consecutive Fibonacci Numbers is Prime

// Input: (5 + 8)
// Output: 13 is Prime

function consecutiveFibonacciPrime(a, b) {
  const aIsFibonacci = findFibonacciNumber(a);
  const bIsFibonacci = findFibonacciNumber(b);
  if (!aIsFibonacci || !bIsFibonacci) return false;
  const sum = a + b;
  return isPrime(sum);
}
function findFibonacciNumber(num) {
  return (
    Number.isInteger(Math.sqrt(5 * num ** 2 + 4)) ||
    Number.isInteger(Math.sqrt(5 * num ** 2 - 4))
  );
}
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(consecutiveFibonacciPrime(5, 8));

// 13.Print First N Prime Fibonacci Numbers

// Input: N = 5
// Output: 2, 3, 5, 13, 89

function firstNFibonacciPrime(num) {
  const fibonacci = [0n, 1n];
  const prime = [];
  for (let i = 2; true; i++) {
    const numbers = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(numbers);
    if (isPrime(numbers)) {
      prime.push(numbers);
      if (prime.length > num - 1) break;
    }
  }
  return prime;
}
function isPrime(N) {
  if (N < 2n) return false;
  for (let i = 2n; i * i <= N; i++) {
    if (N % i === 0n) return false;
  }
  return true;
}
console.log(firstNFibonacciPrime(5));
