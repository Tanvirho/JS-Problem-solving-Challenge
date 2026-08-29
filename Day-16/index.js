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
  while (start <= end) {
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

function smallestGreater(arr, search) {
  let start = 0;
  let end = arr.length - 1;
  let result = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > search) {
      result = arr[mid];
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return result;
}
smallestGreater([3, 5, 8, 12, 17], 10);

// 2️⃣ Find the Greatest Element Smaller Than a Given Value
// Input: [3, 5, 8, 12, 17], search = 10
// Output: 8

function greatestSmaller(arr, search) {
  let start = 0;
  let end = arr.length - 1;
  let result = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] < search) {
      result = arr[mid];
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
}
greatestSmaller([3, 5, 8, 12, 17], 10);

// 3️⃣ Check If a Number Is a Perfect Square Using Binary Search
// Input: N = 36
// Output: true
// For N = 37 → false.

function isPerfectSquare(N) {
  if (N < 0) return false;
  let start = 0;
  let end = N;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let square = mid * mid;
    if (square === N) return true;
    if (square < N) start = mid + 1;
    else end = mid - 1;
  }
  return false;
}
isPerfectSquare(36);

// 4️⃣ Find the Peak Element in a Mountain Array (Binary Search Variant)
// Input: [1, 3, 5, 7, 6, 4, 2]
// Output: Peak = 7 at index 3

function findPeak(arr) {
  let start = 0;
  let end = arr.length - 1;
  let peakIndex = -1;

  while (start <= end) {
    let mid = Math.floor(start + end / 2);

    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      peakIndex = mid;
      break;
    } else if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return { peak: arr[peakIndex], index: peakIndex };
}
findPeak([1, 3, 5, 7, 6, 4, 2]);

// 5️⃣ Binary Search in a Descending Sorted Array
// Input: [100, 90, 70, 40, 10], search = 70
// Output: index 2

function searchDescending(arr, search) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === search) {
      return mid;
    } else if (arr[mid] < search) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
searchDescending([100, 90, 70, 40, 10], 70);

// 6️⃣ Count How Many Times an Element Appears (Using Binary Search Twice)
// Input: [1, 2, 2, 2, 3, 4], element = 2
// Output: 3 times

function countEl(arr, search) {
  // 1. Find the first occurrence
  function findFirst(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let firstIndex = -1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (arr[mid] === target) {
        firstIndex = mid;
        end = mid - 1; // Keep searching to the left
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return firstIndex;
  }

  // 2. Find the last occurrence
  function findLast(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let lastIndex = -1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (arr[mid] === target) {
        lastIndex = mid;
        start = mid + 1; // Keep searching to the right
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return lastIndex;
  }

  let first = findFirst(arr, search);

  // If the element doesn't exist, return 0
  if (first === -1) return 0;

  let last = findLast(arr, search);

  // Calculate total occurrences
  return last - first + 1;
}

countEl([1, 2, 2, 2, 3, 4], 2);

// 7️⃣ Search for a Character in a Sorted String Using Binary Search
// Input: "aabbccddeefg", search = 'e'
// Output: index 8 (first occurrence)

function charFirstOccurrence(str, target) {
  let start = 0;
  let end = str.length - 1;
  let index = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (str[mid] === target) {
      index = mid;
      end = mid - 1;
    }
    if (str[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return index;
}
charFirstOccurrence("aabbccddeefg", "e");

// 8️⃣ Find the Index Where an Element Should Be Inserted (Lower Bound)
// Input: [1, 3, 5, 7], element = 4
// Output: Insert at index 2

function insertIndex(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return start;
}
insertIndex([1, 3, 5, 7], 4);
