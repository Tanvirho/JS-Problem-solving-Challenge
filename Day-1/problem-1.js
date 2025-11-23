// Print Numbers from 1 to N

// Input: 5
// Output: 1 2 3 4 5
// ✨ Teaches basic loop construction.

// const N = parseInt(prompt("Enter the value"))

// for (let i = 1; i <= N; i++) {
//     console.log(i)
// }

// Print Numbers from N to 1 without changing the loop condition of above question

// Input: 5
// Output: 5 4 3 2 1
// ✨ Thinking creatively and manipulating logic within the loop

// const N = 5

// for (let i = N; i >= 1; i--) {
//     console.log(i)
// }



// Print All Even Numbers from 1 to N

// Input: 10
// Output: 2 4 6 8 10
// ✨ Introduces conditional checks inside loops.

// const N = 10

// for (let i = 2; i <= N; i += 2) {
//     console.log(i)
// }

// Sum of First N Natural Numbers

// Input: 5
// Output: 15
// ✨ Encourages cumulative addition and variable usage.

// const N = 5n
// sum = 0n

// for (let i = 1n; i <= N; i++) {
//     sum += i
// }
// or
// sum = n * (n + 1) / 2

// console.log(sum)

// Product(Factorial) of N

// Input: 5
// Output: 120
// ✨ Reinforces loop control with multiplication logic.

// const N = 5
// let fact = 1

// for (let i = 1; i <= N; i++) {
//     fact *= i
// }
// console.log(fact)

// Sum of All Even Numbers up to N

// Input: 10
// Output: 30(2 + 4 + 6 + 8 + 10)
// ✨ Combines loops + condition + accumulation.

// const N = 10

// let sum = 0

// for (let i = 1; i <= N; i++) {
//     if (i % 2 === 0) {
//         sum += i
//     }
//     console.log(sum)
// }
// or

// sum = N / 2 * (N / 2 + 1)
// console.log(sum)


// Print Squares of Numbers from 1 to N

// Input: 5
// Output: 1 4 9 16 25
// ✨ Introduces arithmetic pattern generation.

// const N = 5

// for (let i = 1; i <= N; i++) {
//     console.log(i * i)
//     console.log(i ** 2)
//     console.log(Math.pow(i, 2))
// }

// Print all numbers divisible by 3 and 5 up to N

// Input: 30
// Output: 15 30
// ✨ Reinforces conditional checks inside loops.


// const N = 30

// for (let i = 1; i <= N; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i)
//     }
// }

// Find the sum of all odd numbers up to N

// Input: 10
// Output: 25(1 + 3 + 5 + 7 + 9)
// ✨ Combines looping with conditional accumulation.

// const N = 10

// let sum = 0

// for (let i = 1; i <= N; i++) {
//     if (i % 2 !== 0) {
//         sum += i
//     }
//     console.log(sum)
// }

// Print the cubes of numbers from 1 to N

// Input: 5
// Output: 1 8 27 64 125
// ✨ Extends arithmetic pattern logic beyond squares.

// const N = 5

// for (let i = 1; i <= N; i++) {
//     console.log(i ** 3)
//     console.log(i * i * i)
//     console.log(Math.pow(i, 3))
// }

// Print only the numbers that are both even and perfect squares

// Input: 1 to 20
// Output: 4 16
// ✨ Encourages combining two conditions within one loop.

// const N = 20

// for (let i = 1; i <= N; i++) {
//     if (i % 2 === 0 && Number.isInteger(Math.sqrt(i))) {
//         console.log(i)
//     }
// }