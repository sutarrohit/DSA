// 1. Rotate Array
function rotateArray(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  console.log(arr);
}

// 2. Find largest Element in array
function findLargestElement(arr) {
  let largestElement = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestElement) largestElement = arr[i];
  }

  console.log("largestElement", largestElement);
}

// 3. Find second largest Element in array
function secondLargestElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minElement = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minElement]) minElement = j;
    }
    let temp = arr[i];
    arr[i] = arr[minElement];
    arr[minElement] = temp;
  }

  let secondLargestElement = 0;
  for (j = arr.length - 1; j > 0; j--) {
    if (arr[j] !== arr[j - 1]) {
      secondLargestElement = arr[j - 1];
      break;
    }
  }
  console.log("secondLargestElement", secondLargestElement);
}

// 4. find is array is sorted or not  || Leet Code: 1752. Check if Array Is Sorted and Rotated
function checkSortedArray(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return "Array is not Sorted";
    }
  }
  return "Array is Sorted";
}

// 5. Remove Duplicates Leet Code: 26. Remove Duplicates from Sorted Array
var removeDuplicates = function (nums) {
  const uniqueElement = new Set();

  for (let i = 0; i < nums.length; i++) {
    uniqueElement.add(nums[i]);
  }

  let index = 0;
  for (let num of uniqueElement) {
    nums[index] = num;
    index += 1;
  }
  return uniqueElement.size;
};

var removeDuplicates2 = function (nums) {
  let i = 0;
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      nums[i + 1] = nums[j];
      i++;
    }
  }

  console.log(nums);
};

// 6. Rotate Array Leet Code : 189
function leftRotateArrayByValue(nums, k) {
  k = k % nums.length;

  if (k === 0) {
    return;
  }

  const rotatedPart = [];

  // Extract the rotated part from the end of the array
  for (let i = nums.length - k; i < nums.length; i++) {
    rotatedPart.push(nums[i]);
  }

  // Shift elements to the right to make space for the rotated part
  for (let i = nums.length - 1; i >= k; i--) {
    nums[i] = nums[i - k];
  }

  // Insert the rotated part at the beginning
  for (let i = 0; i < k; i++) {
    nums[i] = rotatedPart[i];
  }
  console.log(nums);
}
// rotateArray([1, 2, 3, 4, 5]);
// findLargestElement([3, 6, 7, 8, 21, 45, 2, 100, 0, 60]);
// secondLargestElement([3, 6, 7, 8, 21, 45, 50, 100, 2, 100, 0, 60]);
// console.log(checkSortedArray([1, 2, 3, 4, 5, 6]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

const nums1 = [1, 2, 3, 4, 5, 6, 7];
const k1 = 3;
leftRotateArrayByValue(nums1, k1);
