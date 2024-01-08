//1.  Count how many time number occurred in array
function arrayNumberPrefetching(arr, number) {
  const hash = Array(6).fill(0);

  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] += 1;
  }
  return hash[5];
}

//2.  Count how many time letter occurred in array
function arrayCharacterPrefetching(arr, character) {
  //   const hash = Array(26).fill(0);
  const hash = new Map();

  for (let i = 0; i < arr.length; i++) {
    const charCode = arr[i].charCodeAt() - "a".charCodeAt();
    // hash[charCode] += 1;
    hash.set(charCode, (hash.get(charCode) || 0) + 1);
  }

  // return hash[character.charCodeAt() - "a".charCodeAt()];
  return hash.get(character.charCodeAt() - "a".charCodeAt());
}

// console.log(
//   arrayNumberPrefetching([5, 1, 2, 5, , 5, 5, 2, 1, 3, 4, 3, 3, 1, 2, 3, 0], 3)
// );

console.log(arrayCharacterPrefetching(["a", "b", "c", "d", "e", "w", "a", "s", "r", "c", "f", "a", "d"], "c"));
