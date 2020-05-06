function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = arr.length / 2;

  let begin = mergeSort(arr.slice(0, mid));
  let end = mergeSort(arr.slice(mid));

  return merge(begin, end)
}

function merge(arr1, arr2) {
  // Create new array 
  let newArr = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }

  // If i is less than arr1 then spread in the rest of arr1
  if (i < arr1.length) {
    newArr.push(...arr1.slice(i))
  }

  // If j is less than arr2 then spread in the rest of arr2
  if (j < arr2.length) {
    newArr.push(...arr2.slice(j)) 
  }

  return newArr;
}


mergeSort([3,1,6,10,2,8,11,54])