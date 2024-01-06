// 1. Simple Recursion
function simpleRecursion(n) {
  let count = n;

  if (n === 0 || n === 1) {
    return 1;
  } else {
    simpleRecursion(n - 1);
  }
}

//-----Summation of N Numbers------ 1+2+3 = 6
// 2. Parametrized way
function summationOfNumber(i, sum) {
  if (i < 1) {
    return console.log(sum);
  }
  summationOfNumber(i - 1, sum + i);
}

// 3. Function way
function summationOfNumberFunction(n) {
  if (n === 0) {
    return 1;
  }
  return n * summationOfNumberFunction(n - 1);
}

// 4. Factorial
function factorialOfNumberFunction(n) {
  if (n === 0) {
    return 0;
  }
  return n + factorialOfNumberFunction(n - 1);
}

// 5. Reverse Array using Loop
function reversArray(arr) {
  let end = arr.length - 1;
  for (let i = 0; i < end; i++) {
    let temp = arr[i];
    arr[i] = arr[end];
    arr[end] = temp;

    end = end - 1;
  }
  return arr;
}

// 6. Reverse Array using Recursion
function reversArrayRecursion(arr, start = 0) {
  let end = arr.length - 1 - start;

  if (start > end) {
    return 0;
  } else {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reversArrayRecursion(arr, start + 1);
  }
  console.log(arr);
}

function palindromeString(arr, start = 0) {
  let end = arr.length - 1 - start;

  if (start > end) {
    return true;
  }
  if (arr[start] !== arr[end]) return false;

  return palindromeString(arr, start + 1);
}

// function palindromeString(arr, start = 0) {
//   let end = arr.length - 1 - start;

//   if (start >= end) {
//     return true; // Base case: start has reached or passed end
//   } else if (arr[start] === arr[end]) {
//     return palindromeString(arr, start + 1); // Recursive call with updated start
//   } else {
//     return false; // Not a palindrome
//   }
// }
// simpleRecursion(5);
// summationOfNumber(4, 0);
// console.log(summationOfNumberFunction(5));
// console.log(factorialOfNumberFunction(5));
// console.log(reversArray([1, 2, 3, 4, 5]));
// reversArrayRecursion([1, 2, 3, 4, 5]);

console.log(palindromeString("level"));
