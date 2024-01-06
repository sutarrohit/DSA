function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimum = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minimum]) minimum = j;
    }
    let temp = arr[i];
    arr[i] = arr[minimum];
    arr[minimum] = temp;
  }

  console.log(arr);
}

selectionSort([3, 5, 6, 7, 5, 1, 4, 8]);
