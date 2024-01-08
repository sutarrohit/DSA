// merger algo
function merge(arr1, arr2) {
  let i = 0;
  let j = 0;

  let newArray = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArray.push(arr1[i]);
      i++;
    } else {
      newArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    newArray.push(arr1[i]);
    i++;
  }

  console.log("j", j);
  // If there are remaining elements in arr2
  while (j < arr2.length) {
    newArray.push(arr2[j]);
    j++;
  }

  console.log("newArray", newArray);
}

merge([1, 2, 4, 40, 50], [6, 7, 8, 9]);
