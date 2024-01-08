// 1. Rotate array by one place
function rotateArrayByOnePlace(arr) {
  const firstElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = firstElement;
  console.log(arr);
}

// 2. Rotate Array by values
function rightRotateArrayByValue(arr, k) {
  const rotateArray = [];

  k = k % arr.length;

  for (let i = 0; i < k; i++) {
    rotateArray.push(arr[i]);
  }

  //   let tempIndex = 0;
  for (let j = k; j < arr.length; j++) {
    arr[j - k] = arr[j];
    // tempIndex++;
  }

  let tempIndex2 = 0;
  for (let j = arr.length - k; j < arr.length; j++) {
    arr[j] = rotateArray[tempIndex2];
    tempIndex2++;
  }

  console.log(arr);
}

// 3. move all 0 at the end / Leet code: 283
function moveAllZeroToEnd(arr) {
  let tempArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      tempArray.push(arr[i]);
    }
  }

  for (let j = 0; j < tempArray.length; j++) {
    arr[j] = tempArray[j];
  }

  for (let k = tempArray.length; k < arr.length; k++) {
    arr[k] = 0;
  }

  console.log(arr);
}

// 4. Linear Search
function LinearSearch(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) return i;
  }
  return -1;
}

// 5. Union of Two Sorted Arrays

function findUnionOfTwoArray(arr1, arr2) {
  const unionSet = new Set();

  for (let i = 0; i < arr1.length; i++) {
    unionSet.add(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    unionSet.add(arr1[i]);
  }
}

// rotateArrayByOnePlace([1, 2, 3, 4, 5]);
// rightRotateArrayByValue([1, 2, 3, 4, 5, 6, 7], 3);
// moveAllZeroToEnd([0]);
// console.log(LinearSearch([4, 2, 9, 1, 5, 12, 3, 7], 12));
findUnionOfTwoArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12]);
