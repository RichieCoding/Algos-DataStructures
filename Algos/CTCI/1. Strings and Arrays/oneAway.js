// There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away
// pale, ple -> TRUE
// pales, pale -> TRUE
// pale, bale -> TRUE
// pale, bake -> FALSE

/* 
I: 2 strings
O: boolean
C: optimize 
E: empty string

*/

// if insert, then s1's current char should match s2's next char
// if remove, then s1's next char should match s2's current char
// if replace, then s1's next char should match s2's next char

// max one edit
// if diff in lengths is greather than max edit, return false

// iterate through strings at the same time, checking for diff
// store max lenght for forloop condition
// if diff is found, dec edits, check if edits dropped below zero, if so return false
// when forloop is done, return true

function oneAway(s1, s2) {
  let edits = 1;
  let maxLen = Math.max(s1.length, s2.length);
  let diff = Math.abs(s1.length - s2.length);

  if (diff > edits) {
    return false;
  }

  for (let i = 0, j = 0; i < maxLen || j < maxLen; i++, j++) {
    let c1 = s1[i];
    let c2 = s2[j];
    if (c1 !== c2) {
      edits--;
      if (edits < 0) {
        return false;
      }
      
      if (c1 === s2[j + 1]) { // inserted
        j++;
      } else if (s1[i + 1] === c2) { // removed
        i++
      }
    }
  }
  return true
}

// function oneAway(, str2) {
//   const obj = charMap(str);
//   const obj2 = charMap(str2);
//   let count = 0;

//   console.log(obj.keys.length)

//   for (let key in obj) {
//     if (!obj2[key]) {
//       count++;
//     }
//   }

//   return count <= 1;
// }

// function charMap(str) {
//   const obj = new Map();
//   for (let i of str) {
//     !obj[i] ? (obj[i] = 1) : obj[i]++;
//   }
//   return obj;
// }

console.log(oneAway("apple", "aple"));
