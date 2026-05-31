// 🎯 Day 11 – Medium Array Problems
// 🧩 Core Concept Focus
// Two-pointer technique
// Prefix sums
// Subarray analysis
// 🏫 Class Questions
// 1️⃣ Find Missing Number from Range 1 to N
// Input: [1, 5, 2, 4]
// Output: 3

function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, crr) => acc + crr, 0);
  return expectedSum - actualSum;
}
findMissingNumber([1, 5, 2, 4]);

// 2️⃣ Move All Zeroes to End (Stable, O(n))
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

function moveZeroes(arr) {
  // const newArr = [];
  // for (const num of arr) {
  //   if (num !== 0) {
  //     newArr.push(num);
  //   }
  // }
  // while (newArr.length < arr.length) {
  //   newArr.push(0);
  // }
  // return newArr;
  let pos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[pos] = arr[i];
      pos++;
    }
  }
  while (pos < arr.length) {
    arr[pos] = 0;
    pos++;
  }
  return arr;
}
moveZeroes([0, 1, 0, 3, 12]);

// 3️⃣ Find the First Repeating Element in an Array
// Input: [10, 5, 3, 4, 3, 5, 6]
// Output: 5

function firstRepeatingElement(arr) {
  const seen = new Set();
  for (const num of arr) {
    if (seen.has(num)) return num;
    seen.add(num);
  }
  // const newArr = [];
  // for (const num of arr) {
  //   if (newArr.includes(num)) return num;
  //   newArr.push(num);
  // }
  return null;
}
firstRepeatingElement([10, 5, 3, 4, 3, 5, 6]);

// 4️⃣ Maximum Subarray Sum (Kadane’s Algorithm – O(n))
// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6

function maxSubArraySum(arr) {
  let maxSum = -Infinity;
  let currentSum = 0;
  for (const num of arr) {
    currentSum += num;
    if (currentSum > maxSum) maxSum = currentSum;
    if (currentSum < 0) currentSum = 0;
  }
  return maxSum;
}
maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

// 5. Find the Longest Subarray with Sum = K (Optimized)
// Input: [1, 2, 3, 4, 5], K = 9
// Output: [2, 3, 4]

function longestSubarrayWithSumK(arr, K) {
  let currentSum = 0;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j];
      newArr.push(arr[j]);
      if (currentSum === K) return newArr;
      if (currentSum > K) {
        currentSum = 0;
        newArr = [];
        break;
      }
    }
  }
  return null;
}
longestSubarrayWithSumK([1, 2, 3, 4, 5], 9);

// 6. Find the Length of the Longest Subarray with No Repeating Elements
// Input: [1,2,3,1,2,3,4]
// Output: 4

function longestSubarrayNoRepeats(arr) {
  const seen = new Set();
  for (const num of arr) {
    seen.add(num);
  }
  return seen.size;
}
longestSubarrayNoRepeats([1, 2, 3, 1, 2, 3, 4]);

// 7. Maximum Subarray (Kadane’s Algorithm – O(n))
// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: [4, -1, 2, 1]

function maximumSubarray(arr) {
  let maxSum = -Infinity;
  let currentSum = 0;

  // Track the indices to slice the final array later
  let maxStart = 0;
  let maxEnd = 0;
  let tempStart = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    // If we find a new maximum sum, update the bounds of our best subarray
    if (currentSum > maxSum) {
      maxSum = currentSum;
      maxStart = tempStart;
      maxEnd = i;
    }

    // If currentSum drops below zero, reset it and move the temporary start index
    if (currentSum < 0) {
      currentSum = 0;
      tempStart = i + 1;
    }
  }

  // Return the contiguous sub-segment using the tracked indices
  return arr.slice(maxStart, maxEnd + 1);
}
maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

// 8. Find the Longest Increasing Subarray (Continuous)
// Input: [1, 2, 2, 3, 4, 5]
// Output: Length = 4, SubArray = [2, 3, 4, 5]

function longestIncreasingSubarray(arr) {
  if (arr.length === 0) return { Length: 0, SubArray: [] };

  let currentSub = [];
  let maxSub = []; // This acts as our memory for the longest streak

  for (let i = 0; i < arr.length; i++) {
    // 1. ALWAYS push the current number into our current streak first
    currentSub.push(arr[i]);

    // 2. Check if the sequence is breaking OR if we reached the end
    if (arr[i] >= arr[i + 1] || arr[i + 1] === undefined) {
      
      // 3. If the streak that just ended is the longest we've seen, save a copy of it
      if (currentSub.length > maxSub.length) {
        maxSub = [...currentSub]; 
      }
      
      // 4. Reset the current streak for the next sequence
      currentSub = [];
    }
  }

  // Returning the exact format requested in your comments
  return {
    Length: maxSub.length,
    SubArray: maxSub
  };
}

console.log(longestIncreasingSubarray([1, 2, 2, 3, 4, 5]));
// Output: { Length: 4, SubArray: [ 2, 3, 4, 5 ] }

// Testing it on a tricky array to prove the memory works:
console.log(longestIncreasingSubarray([1, 2, 3, 4, 1, 2])); 
// Output: { Length: 4, SubArray: [ 1, 2, 3, 4 ] }
