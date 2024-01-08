// Merge algorithm
function merge(arr, low, mid, high) {
  console.log("full array", arr);
  let left = low;
  let right = mid + 1;

  let newArray = [];

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      newArray.push(arr[left]);
      left++;
    } else {
      newArray.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    newArray.push(arr[left]);
    left++;
  }

  while (right <= high) {
    newArray.push(arr[right]);
    right++;
  }

  // Copy elements back to the original array
  for (let i = low; i <= high; i++) {
    arr[i] = newArray[i - low];
  }
}

function mergeSort(arr, low, high) {
  if (low === high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

// Example usage
const arr = [64, 34, 95, 25, 12, 22, 8, 4, 1, 90, 11];
mergeSort(arr, 0, arr.length - 1);
console.log("Sorted Array:", arr);
