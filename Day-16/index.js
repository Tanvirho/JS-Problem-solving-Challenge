// 🎯 Day 16 – Binary Search
// 🧩 Core Concept Focus
// Understanding mid calculation
// Searching efficiently in sorted arrays
// Avoiding overflow in mid formula
// Handling duplicates
// Handling edge cases and boundaries
// Using binary search for conditions
// 🏫 Class Questions
// (All arrays are sorted.)

// 1️⃣ Find an Element Using Binary Search
// Input: [1, 3, 5, 7, 9], search = 7
// Output: 3
// Return -1 If Element Is Not Found

function binarySearch(arr, search) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === search) return mid;
    if (arr[mid] < search) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}
binarySearch([1, 3, 5, 7, 9], 7);

// 2️⃣ Find the First Occurrence of a Repeated Number
// Input: [2, 4, 4, 4, 9, 11], search = 4
// Output: index 1

function firstOccurrence(arr, search) {
  let start = 0;
  let end = arr.length - 1;
  let result = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === search) {
      result = mid;
      end = mid - 1;
    } else if (arr[mid] < search) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
}
firstOccurrence([2, 4, 4, 4, 9, 11], 4);

// 3️⃣ Find the Last Occurrence of a Repeated Number
// Input: [2, 4, 4, 4, 9, 11], search = 4
// Output: index 3

function lastOccurrence(arr, search) {
  let start = 0;
  let end = arr.length - 1;
  let result = -1;
  while (start <= end){
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === search) {
      result = mid;
      start = mid + 1;
    } else if (arr[mid] < search) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
}
lastOccurrence([2, 4, 4, 4, 9, 11], 4);

// 🏠 Homework Questions
// 1️⃣ Find the Smallest Element Greater Than a Given Value
// Input: [3, 5, 8, 12, 17], search = 10
// Output: 12
// 2️⃣ Find the Greatest Element Smaller Than a Given Value
// Input: [3, 5, 8, 12, 17], search = 10
// Output: 8
// 3️⃣ Check If a Number Is a Perfect Square Using Binary Search
// Input: N = 36
// Output: true
// For N = 37 → false.
// 4️⃣ Find the Peak Element in a Mountain Array (Binary Search Variant)
// Input: [1, 3, 5, 7, 6, 4, 2]
// Output: Peak = 7 at index 3
// 5️⃣ Binary Search in a Descending Sorted Array
// Input: [100, 90, 70, 40, 10], search = 70
// Output: index 2
// 6️⃣ Count How Many Times an Element Appears (Using Binary Search Twice)
// Input: [1, 2, 2, 2, 3, 4], element = 2
// Output: 3 times
// 7️⃣ Search for a Character in a Sorted String Using Binary Search
// Input: "aabbccddeefg", search = 'e'
// Output: index 8 (first occurrence)
// 8️⃣ Find the Index Where an Element Should Be Inserted (Lower Bound)
// Input: [1, 3, 5, 7], element = 4
// Output: Insert at index 2
