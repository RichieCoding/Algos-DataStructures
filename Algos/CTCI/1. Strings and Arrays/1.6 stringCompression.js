/* Implement a method to perform basic string compression using the counts of repeated characters. For example the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a-z)

I: string
O: compressed string
C: optimize 
E: compressed string that's same length as the original string, empty str

time complexity: linear
space complexity: constant

*/

function stringCompression(s) {
  // traverse string, keep count of repeated chars
  // if cur and next char is the same, increment count
  // otherwise, concat cur char and count to output string, reset count to 1
  // return compressed string, only if the length is less than the original string, otherwise, return original string

  let output = '';
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    let next = s[i + 1];
    if (cur === next) {
      count++
    } else {
      output += cur + String(count);
      count = 1
    }
  }
  return output.length < s.length ? output : s
}


// function stringCompression(str) {
//   if (str.length < 0) return undefined 

//   let newStr = "";
//   let curr = str[0];
//   let count = 1;
//   newStr += curr

//   for (let i = 1; i < str.length; i++) {
//     if (str[i] !== curr) {
//       curr = str[i];
//       newStr += count.toString();
//       newStr += curr;
//       count = 1;
//     } else {
//       count++;
//     }

//     if (i === str.length - 1) {
//       newStr += count.toString()
//     }

//   }

//   if (newStr.length === str.length) {
//     return str
//   }
  
//   return newStr 
// }

console.log(stringCompression("aaAAaa"))