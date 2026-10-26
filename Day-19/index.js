// 🎯 Day 19 – Recursion on Objects
// 🧩 Core Concept Focus
// Recursive traversal of nested objects
// Depth-first recursion
// Base cases for objects and arrays
// Aggregation, search, and transformation on nested data
// Real-world JSON-style recursion
// 🏫 Class Questions
// 1️⃣ Print All Values in a Nested Object
// Input:
// {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3,
//       f: {
//         g: 'Hi'
//       }
//     }
//   }
// }
// Output: 1 2 3 Hi

function printObjectValue(obj) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      printObjectValue(obj[key]);
    } else {
      //   console.log(obj[key]);
    }
  }
}
printObjectValue({
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: "Hi",
      },
    },
  },
});

// 2️⃣ Count Total Number of Keys in a Nested Object
// Input:
// {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3,
//       f: 4
//     }
//   }
// }
// Output: 6

function countKeys(obj) {
  let count = 0;
  const keys = Object.keys(obj);
  for (const key of keys) {
    count++;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      count += countKeys(obj[key]);
    }
  }
  return count;
}

countKeys({
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4,
    },
  },
});

// 3️⃣ Find the Sum of All Numeric Values in a Nested Object
// Input:
// {
//   x: 10,
//   y: {
//     z: 5,
//     w: {
//       k: 15
//     }
//   }
// }
// Output: 30

function sumOfObject(obj) {
  let sum = 0;
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (typeof obj[key] === "object" && obj[key] !== null)
      sum += sumOfObject(obj[key]);
    else sum += obj[key];
  }
  return sum;
}

sumOfObject({
  x: 10,
  y: {
    z: 5,
    w: {
      k: 15,
    },
  },
});

// 4️⃣ Print All Keys in a Nested Object
// Input:
// {
//   a: {
//     b: {
//       c: 1;
//     }
//   }
// }
// Output: a b c

function printKeys(obj) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    // console.log(key);
    if (typeof obj[key] === "object" && obj[key] !== null) printKeys(obj[key]);
  }
}
printKeys({
  a: {
    b: {
      c: 1,
    },
  },
});

// 🏠 Homework Questions
// 1️⃣ Convert All String Values to Uppercase in a Nested Object
// Input:
// {
//   name: "john",
//   details: {
//     city: "mumbai",
//     role: "dev"
//   }
// }
// Output: All strings converted to uppercase.

function convertUppercase(obj) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (typeof obj[key] === "object" && obj[key] !== null)
      convertUppercase(obj[key]);
    else if (typeof obj[key] === "string") obj[key] = obj[key].toUpperCase();
  }
  return obj;
}
convertUppercase({
  name: "john",
  details: {
    city: "mumbai",
    role: "dev",
  },
});

// 2️⃣ Count How Many Times a Key Appears in a Nested Object
// Input:
// {
//   a: 1,
//   b: {
//     a: 2,
//     c: {
//       a: 3
//     }
//   }
// }
// Search key: "a"

// Output: 3

function findKeyCount(obj, k) {
  let count = 0;
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (key === k) count++;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      count += findKeyCount(obj[key], k);
    }
  }
  return count;
}
findKeyCount(
  {
    a: 1,
    b: {
      a: 2,
      c: {
        a: 3,
      },
    },
  },
  "a",
);

// 3️⃣ Find the Depth of a Nested Object
// Input:
// {
//   a: {
//     b: {
//       c: {
//         d: 1
//       }
//     }
//   }
// }
// Output: 4

function findDepth(obj) {
  if (typeof obj !== "object" && obj !== null) return 0;
  let count = 0;
  const keys = Object.keys(obj);
  for (const key of keys) {
    const dep = findDepth(obj[key]);
    if (dep > count) {
      count = dep;
    }
  }
  return 1 + count;
}
findDepth({
  a: {
    b: {
      c: {
        d: 1,
      },
    },
  },
});

// 4️⃣ Check If a Value Exists in a Nested Object
// Input:
// {
//   name: "A",
//   info: {
//     age: 25,
//     address: {
//       city: "Delhi"
//     }
//   }
// }
// Search value: "Delhi"
// Output: true

function findValue(obj, value) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      return findValue(obj[key], value);
    } else if (obj[key] === value) return true;
  }
  return false;
}

findValue(
  {
    name: "A",
    info: {
      age: 25,
      address: {
        city: "Delhi",
      },
    },
  },
  "Delhi",
);

// 5️⃣ Replace a Value in a Nested Object Using Recursion
// Input: Replace city: "Delhi" with "Bangalore"
// Output: Updated object.

function replaceValue(obj, target, value) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (typeof obj[key] === "object" && obj[key] !== null)
      replaceValue(obj[key], target, value);
    else if (obj[key] === target) {
      obj[key] = value;
      return;
    }
  }
  return obj;
}
replaceValue(
  {
    name: "A",
    info: {
      age: 25,
      address: {
        city: "Delhi",
      },
    },
  },
  "Delhi",
  "Bangalore",
);

// 6️⃣ Count Total Number of Objects Inside a Nested Structure
// Input:
// {
//   a: {},
//   b: {
//     c: {},
//     d: {
//       e: {},
//       f: 5
//     }
//   }
// }
// Output: 5 Count only objects, not primitive values.\

function countObj(obj) {
  let count = 0;
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      count++;
      count += countObj(obj[key]);
    }
  }
  return count;
}
countObj({
  a: {},
  b: {
    c: {},
    d: {
      e: {},
      f: 5,
    },
  },
});

// 7️⃣ Find the Path to a Given Key in a Nested Object
// Input: Find path to key "e"
// Output: "b.d.e"

function findPath(obj, target) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (key === target) return key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      const path = findPath(obj[key], target);
      if (path) return key + "." + path;
    }
  }
  return null;
}
findPath(
  {
    a: {},
    b: {
      c: {},
      d: {
        e: {},
        f: 5,
      },
    },
  },
  "e",
);

// 8️⃣ Find the Maximum Numeric Value in a Nested Object
// Input:
// {
//   a: 4,
//   b: {
//     c: 9,
//     d: {
//       e: 2
//     }
//   }
// }
// Output: 9

function findMax(obj, max = 0) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      return findMax(obj[key], max);
    } else if (obj[key] > max) {
      max = obj[key];
    }
  }
  return max;
}

findMax({
  a: 4,
  b: {
    c: 9,
    d: {
      e: 2,
    },
  },
});
