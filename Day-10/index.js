// 🎯 Day 10 – Arrays (Basics + Intermediate)
// 🧩 Core Concept Focus
// Looping through arrays
// Finding max, min, sum
// Frequency based problems
// Working with indexes
// Basic transformations
// Eliminating duplicates
// 🏫 Class Questions (7 Problems)

// 1️⃣ Find the Maximum and Minimum Element
// Input: [10, 25, 3, 18]
// Output: Max = 25, Min = 3

function findMaxMin(arr) {
  let max = arr[0];
  let min = arr[0];
  for (const num of arr) {
    if (max < num) {
      max = num;
    }
    if (min > num) {
      min = num;
    }
  }
  return { max, min };
}
findMaxMin([10, 25, 3, 18]);

// 2️⃣ Reverse an Array (Manual Method Only)
// Input: [1, 2, 3, 4, 5]

// Output: [5, 4, 3, 2, 1]

// ✨ Two pointer technique, no reverse().

function reverseArray(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex < rightIndex) {
    const temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
  return arr;
}
reverseArray([1, 2, 3, 4, 5]);

// 3️⃣ Check if an Array is Sorted (Ascending)
// Input: [1, 2, 3, 4, 5]
// Output: Sorted

function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}
isSorted([1, 2, 3, 4, 5]);

// 4️⃣ Remove All Duplicates From an Array (Use filter method)
// Input: [1, 2, 2, 3, 3, 4]
// Output: [1, 2, 3, 4]

function removeDuplicates(arr) {
  return arr.filter((el, index) => arr.indexOf(el) === index);
}
removeDuplicates([1, 2, 2, 3, 3, 4]);

// 5️⃣ Merge Two Arrays Without Using concat or spread
// Input: [1, 2, 3] and [4, 5]
// Output: [1, 2, 3, 4, 5]

function mergeArrays(arr1, arr2) {
  const merged = [];
  for (const num of arr1) {
    merged.push(num);
  }
  for (const num of arr2) {
    merged.push(num);
  }
  return merged;
}
mergeArrays([1, 2, 3], [4, 5]);

// 6 Find the Second Largest Element
// Input: [10, 20, 4, 45, 99]
// Output: 45

function findSecondLargest(arr) {
  const sorted = arr.sort((a, b) => b - a);
  return sorted[1];
}
findSecondLargest([10, 20, 4, 45, 99]);

// 7 Rotate an Array to the Right by K Steps
// Input: [1, 2, 3, 4, 5], K = 2
// Output: [4, 5, 1, 2, 3]

function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n;
  return [...arr.slice(-k), ...arr.slice(0, n - k)];
}
rotateArray([1, 2, 3, 4, 5], 2);

// 8 Check if Two Arrays Are Equal (Same Order)
// Input: [1, 2, 3] vs [1, 2, 3]
// Output: Equal

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
areArraysEqual([1, 2, 3], [1, 2, 3]);

// 4️⃣ Count Even and Odd Numbers in an Array
// Input: [2, 5, 7, 8, 10]
// Output: Even = 3, Odd = 2

function countEvenOdd(arr) {
  let evenCount = 0;
  let oddCount = 0;
  for (const num of arr) {
    if (num % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  return { even: evenCount, odd: oddCount };
}
countEvenOdd([2, 5, 7, 8, 10]);

// 5️⃣ Find All Unique Pairs Whose Sum Equals a Target
// Input: [1, 2, 3, 4, 5], target = 6
// Output: (1,5), (2,4)

function findPairs(arr, target) {
  const pairs = [];
  for (const num1 of arr) {
    for (const num2 of arr) {
      if (num1 + num2 === target && num1 < num2) {
        pairs.push(`(${num1},${num2})`);
      }
    }
  }
  return pairs;
}
findPairs([1, 2, 3, 4, 5], 6);

// 6️⃣ Left Shift an Array by One Position
// Input: [1, 2, 3, 4]
// Output: [2, 3, 4, 1]
// ✨ Manual shifting, moving first element to end.

function leftShift(arr) {
  const firstElement = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = firstElement;
  return arr;
}
leftShift([1, 2, 3, 4]);

// 7️⃣ Count How Many Times an Element Appears in an Array
// Input: array = [1, 4, 4, 4, 2], element = 4
// Output: 3

function countOccurrences(arr, element) {
  let count = 0;
  for (const el of arr) {
    if (el === element) count++;
  }
  return count;
}
countOccurrences([1, 4, 4, 4, 2], 4);
