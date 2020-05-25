// Implement an algorithm that determines if a string has all unique characters. What if you cannot use additional data structures?

// Using a HashTable
function isUnique(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      return false
    }
    obj[str[i]] = true
  }

  return true
}

// Without additional data structures 
function isUniqueTwo(str) {
  const len = str.length
  for (let i = 0; i < len; i++) {
    for (let j = i+1; j < len; j++) {
      if (str[i] === str[j]) {
        return false
      }
    }
  }
  return true
}


console.log(isUniqueTwo("hello"))
