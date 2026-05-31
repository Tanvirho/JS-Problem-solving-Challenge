// 🎯 Day 12 – Bubble Sort Questions
// 1️⃣ Sort an Array in Ascending Order Using Bubble Sort
// Input: [5, 3, 8, 4, 2]
// Output: [2, 3, 4, 5, 8]

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
bubbleSort([5, 3, 8, 4, 2]);

// 2️⃣ Sort an Array in Descending Order Using Bubble Sort
// Input: [7, 1, 5, 3, 2]
// Output: [7, 5, 3, 2, 1]

function bubbleSortDescending(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
bubbleSortDescending([7, 1, 5, 3, 2]);

// 3️⃣ Sort a String Alphabetically Using Bubble Sort Logic
// Input: "javascript"
// Output: "aacijprstv" (Treat string as array of characters.)

function bubbleSortString(str) {
  const arr = str.split("");
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j].toLowerCase() > arr[j + 1].toLowerCase()) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr.join("");
}
bubbleSortString("JavaScript");

// 4️⃣ Sort an Array and Count the Number of Swaps Performed
// Input: [4, 3, 2, 1]
// Output:
// Sorted: [1,2,3,4]
// Swaps: 6

function bubbleSortWithSwapCount(arr) {
  const n = arr.length;
  let swapCount = 0;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
        swapCount++;
      }
    }
    if (!swapped) break;
  }
  return { arr, swapCount };
}
bubbleSortWithSwapCount([4, 3, 2, 1]);

// 1️⃣ Sort an Array of Objects by Age (Ascending)
// Input:

// [
//   { name: "A", age: 25 },
//   { name: "B", age: 20 },
//   { name: "C", age: 30 },
// ];
// Output: Sorted by age.

function bubbleSortByAge(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j].age > arr[j + 1].age) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
bubbleSortByAge([
  { name: "A", age: 25 },
  { name: "B", age: 20 },
  { name: "C", age: 30 },
]);

// 2️⃣ Sort an Array but Keep Zeros at the End (Zeros Fixed)
// Input: [3, 0, 5, 0, 2, 1]
// Output: [1, 2, 3, 5, 0, 0]

function bubbleSortKeepZeros(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      let val1 = arr[j] === 0 ? Infinity : arr[j];
      let val2 = arr[j + 1] === 0 ? Infinity : arr[j + 1];
      if (val1 > val2) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
bubbleSortKeepZeros([3, 0, 5, 0, 2, 1]);

// 3️⃣ Sort an Array and Track How Many Comparisons Were Made
// Input: [5, 1, 4, 2, 8]

// Output:
// Sorted array
// Total comparisons

function bubbleSortWithComparisonCount(arr) {
  const n = arr.length;
  let comparisonCount = 0;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      comparisonCount++;
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return { arr, comparisonCount };
}
bubbleSortWithComparisonCount([5, 1, 4, 2, 8]);

// 4️⃣ Sort an Array of Characters Case-Insensitive
// Input: ['b', 'A', 'd', 'C']
// Output: ['A', 'b', 'C', 'd']

function bubbleSortCaseInsensitive(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j].toLowerCase() > arr[j + 1].toLowerCase()) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
bubbleSortCaseInsensitive(["b", "A", "d", "C"]);

// 5️⃣ Sort a 2D Array by the First Element of Each Subarray
// Input:

// [[3, "c"], [1, "a"], [2, "b"]]
// Output:

// [[1, "a"], [2, "b"], [3, "c"]]

function bubbleSort2D(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j][0] > arr[j + 1][0]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
bubbleSort2D([
  [3, "c"],
  [1, "a"],
  [2, "b"],
]);

// 6️⃣ Sort an Array in Ascending Order but Stop After K Passes
// Input: [5, 4, 3, 2, 1], K = 2
// Output: Array state after 2 bubble sort passes.

function bubbleSortKPasses(arr, k) {
  const n = arr.length;
  for (let i = 0; i < k; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
bubbleSortKPasses([5, 4, 3, 2, 1], 2);

// 7️⃣ Sort Only the Even Numbers in an Array (Odd Numbers Stay in Place)
// Input: [9, 4, 2, 7, 6, 5]
// Output: [9, 2, 4, 7, 6, 5] (Sort evens using bubble sort while keeping odd numbers fixed.)

function bubbleSortEvenNumbers(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1] && arr[j] % 2 === 0 && arr[j + 1] % 2 === 0) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
bubbleSortEvenNumbers([9, 4, 2, 7, 6, 5]);

// 8️⃣ Sort an Array of Strings by Length (Shortest to Longest)
// Input: ["hi", "javascript", "is", "fun"]
// Output: ["hi", "is", "fun", "javascript"]

function bubbleSortByLength(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j].length > arr[j + 1].length) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
bubbleSortByLength(["hi", "javascript", "is", "fun"]);
