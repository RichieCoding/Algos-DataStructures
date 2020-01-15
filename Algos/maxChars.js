// Max Characters 
// Given a string return the most frequent letter
// EX.   Input: "Hello"   Output: "l"

const maxChar = (str) => {
  let obj = {}

  for(let i = 0; i < str.length; i++) {
    const current = str[i];
    if (!obj[current]) {
      obj[current] = 1
    } else {
      obj[current]++
    }
  }
  
  // Loop through our keys in our obj
  // Compare their values
  return Object.keys(obj).reduce((a,b) => obj[a] > obj[b] ? a : b)
}

console.log(maxChar('hello'))