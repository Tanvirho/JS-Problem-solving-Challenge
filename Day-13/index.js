// 🎯 Day 13 – Selection Sort Questions
// 🧩 Core Concept Focus
// Selecting minimum or maximum element
// Swapping with correct index
// Reducing the unsorted region
// Understanding unstable sorting and selection-based logic
// 🏫 Class Questions
// 1️⃣ Sort an Array in Ascending Order Using Selection Sort
// Input: [7, 2, 9, 4, 1]
// Output: [1, 2, 4, 7, 9]

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdex]) minIdex = j;
    }
    if (i !== minIdex) {
      let temp = arr[i];
      arr[i] = arr[minIdex];
      arr[minIdex] = temp;
    }
  }
  return arr;
}
selectionSort([7, 2, 9, 4, 1]);

// 2️⃣ Sort an Array in Descending Order
// Input: [3, 8, 5, 2, 9]
// Output: [9, 8, 5, 3, 2]

function selectionSortDescending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[maxIndex]) maxIndex = j;
    }
    if (i !== maxIndex) {
      let temp = arr[i];
      arr[i] = arr[maxIndex];
      arr[maxIndex] = temp;
    }
  }
  return arr;
}
selectionSortDescending([3, 8, 5, 2, 9]);

// 3️⃣ Find the Kth Smallest Element Using Selection Logic
// Input: [9, 4, 7, 1, 3], K = 3
// Output: 4

function kthSmallest(arr, k) {
  for (let i = 0; i < k; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    if (i !== minIndex) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr[k - 1];
}
kthSmallest([9, 4, 7, 1, 3], 3);

// 4️⃣ Selection Sort but Track Index of Minimum for Each Pass
// Input: [4, 2, 5, 3, 1]
// Output:
// Pass 1 → min index = 4
// Pass 2 → min index = 3

function selectionSortWithMinIndex(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    // console.log(`Pass ${i + 1} → min index = ${minIndex}`);
    if (i !== minIndex) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}
selectionSortWithMinIndex([4, 2, 5, 3, 1]);

// 5️⃣ Sort an Array of Objects by Name
// Input:
// [{ name: "Charlie" }, { name: "Alice" }, { name: "Bob" }];
// Output: Sorted alphabetically by name.

function selectionSortObjectsByName(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].name[0].toLowerCase() < arr[minIndex].name[0].toLowerCase())
        minIndex = j;
    }
    if (i !== minIndex) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}
selectionSortObjectsByName([
  { name: "Charlie" },
  { name: "Alice" },
  { name: "Bob" },
]);

// 🏠 Homework Questions
// 1️⃣ Find the K Largest Elements Without Full Sorting
// Input: [5, 1, 9, 3, 7], K = 2
// Output: [9, 7] (Stop early once top K elements are placed.)

function kLargestLargestElements(arr, k) {
  const n = [];
  for (let i = 0; i < k; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[maxIndex]) maxIndex = j;
    }
    n.push(arr[maxIndex]);
    if (i != maxIndex) {
      let temp = arr[i];
      arr[i] = arr[maxIndex];
      arr[maxIndex] = temp;
    }
  }
  return n;
}
kLargestLargestElements([5, 1, 9, 3, 7], 2);

// 2️⃣ Sort a 2D Array by Second Element in Each Subarray
// Input: [[3, 9], [1, 4], [2, 5]]
// Output: Sorted by second values → [[1,4], [2,5], [3,9]]

function sortedBySecondEl(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j][1] < arr[minIndex][1]) minIndex = j;
    }
    if (i !== minIndex) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}
sortedBySecondEl([
  [3, 9],
  [1, 4],
  [2, 5],
]);

// 3️⃣ Sort an Array and Count How Many Times Minimum Changed
// Input: [8, 3, 5, 2, 6]
// Output: Number of times a new minimum was found.

function countMinimum(arr) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        count++;
      }
    }
    if (i !== minIndex) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return count;
}
countMinimum([8, 3, 5, 2, 6]);

// 4️⃣ Sort Only Elements at Even Indexes
// Input: [9, 4, 7, 6, 3, 2]
// Even index elements: 9, 7, 3
// Output: Sort only these positions using selection logic.

function sortByEvenIndex(arr) {
  for (let i = 0; i < arr.length - 1; i += 2) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j += 2) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    if (i !== minIndex) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}
sortByEvenIndex([9, 4, 7, 6, 3, 2]);

// 5️⃣ Sort an Array of Characters by ASCII Value
// Input: ['d', 'A', 'c', 'B']
// Output: Sorted by ASCII: ['A', 'B', 'c', 'd']

function sortByASCIIValue(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].charCodeAt() < arr[minIndex].charCodeAt()) minIndex = j;
    }
    if (i !== minIndex) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}
sortByASCIIValue(["d", "A", "c", "B"]);
