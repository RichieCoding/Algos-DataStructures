function uniqueValues(arr) {
  let i = 0
  let j = 1 
  if (arr.length === 0) return 0
  while (j < arr.length) {
    if (arr[j] === arr[i]) {
      j += 1
    } else {
      i ++ 
      arr[i] = arr[j]

    }
  }
  return i + 1
}

uniqueValues([1,123,2,2,2,3,5])