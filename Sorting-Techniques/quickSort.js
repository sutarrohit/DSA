function partition(array, low, high) {
  const pivot = array[low];

  let i = low + 1;

  // const unsortedArray = [8, 3, 5, 1, 7, 2, 6, 4];
  for (let j = low + 1; j <= high; j++) {
    if (array[j] < pivot) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
    }
  }

  [array[low], array[i - 1]] = [array[i - 1], array[low]];

  return i - 1;
}

// QuickSort function
function quickSort(array, low, high) {
  if (low < high) {
    const partitionIndex = partition(array, low, high);

    quickSort(array, low, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, high);
  }
}

const unsortedArray = [8, 3, 5, 1, 7, 2, 6, 4];
quickSort(unsortedArray, 0, unsortedArray.length - 1);
console.log(unsortedArray);
