const chunked = (arr, num) => {
  let newArr = [];

  let begin = 0;
  let end = num;

  while (begin < end) {
    newArr.push(arr.slice(begin, end))
    begin += end
    end += end
  }

  return newArr
}

console.log(chunked([1,2,3,4,5,6,7], 2))