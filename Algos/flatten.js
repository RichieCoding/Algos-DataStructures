function flatten(arr) {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc = acc.concat(flatten(curr))
    } else {
      acc.push(curr)
    }
    return acc
  }, []) 
}

console.log(flatten([1,2,[3, [1, 2, 3], 4],5,6]))