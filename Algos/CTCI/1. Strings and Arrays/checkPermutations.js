// Given two strings, write a method to decide if one is a permutation of the other.


// Uses a hash map to check the frequency of each character 
function isPermutation(str, str2) {
  if (str.length !== str2.length) return false
  const obj = createHashMap(str)
  const obj2 = createHashMap(str2)

  for (let key in obj) {
    if (!obj2[key]) {
      return false
    }
  }

  return true
}

function createHashMap(str) {
  let obj = {}
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1
    } else {
      obj[str[i]] += 1
    }
  }
  return obj
}


console.log(isPermutation('hello', 'elloh'))