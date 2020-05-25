// Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. You can ignore casing and non-letter characters.
// Input: Tact Coa
// Output: True(premutations: 'taco cat'. 'atco cta' etc)

// HashMap

function palindromePermutation(str) {
  const newStr = str.replace(/[^A-Za-z0-9]/g, '')
  const hash = new Map()
  let counter = 0;
  for (let i = 0; i < newStr.length; i++) {
    if (!hash[newStr[i]]) {
      hash[newStr[i]] = 1
    } else {
      hash[newStr[i]] += 1
    }
  }

  for (let key in hash) {
    if (hash[key] % 2 === 1) {
      counter++
    }
  }

  return counter <= 1
}



console.log(palindromePermutation('taco cat'))


// create a hash of unique characters
// count the frequency of the characters
// if the frequency of the character is even so far so good
// all the frequency of the characters have to be an even count except for one which can only have one
