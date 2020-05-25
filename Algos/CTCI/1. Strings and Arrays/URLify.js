// Write a method to replace all spaces with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the 'true' length of the string. 
//(Note: If implenting in Java, please use a character array so that you can perform this operation in place.) 
//Ex. Input: 'Mr John Smith', 13
//    Output: 'Mr%20John%20Smith'


function urlify(str, len) {
  const arr = str.split("")
  for (let i = 0; i < len; i++) {
    if (arr[i] === " ") {
      arr[i] = '%20'
    }
  }
  return arr.join("")
}

console.log(urlify('Mr John Smith', 13))