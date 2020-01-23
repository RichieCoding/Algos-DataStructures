function vowels(str) {
  
  let total = 0;
  const checker = ["a", "e", "i", "o", "u"];

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      total++
    }
  }
  
  return total
}

// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi);

//   return matches ? matches.length : 0
// }



console.log(vowels("Why do you ask?"))