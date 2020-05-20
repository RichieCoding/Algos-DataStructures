function isValid(str) {
  if (str.length <= 1) return false

  const stack = [];
  let matchingOpeningBracket;

  const openingBrackets = ["{", "(", "["]
  const closingBrackets = ["}", ")", "]"]

  for (let i = 0; i < str.length; i++) {

    if (closingBrackets.indexOf(str[i]) > -1) {
      matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(str[i])]

      if (stack.length == 0 || (stack.pop() !== matchingOpeningBracket)) {
        return false
      } 
    } else {
      stack.push(str[i])
    }


  }
  return stack.length === 0
}


console.log(isValid("({})()"))