const isPalindrome = str => {
  let start = 0;
  let end = str.length - 1;

  while (start < end / 2) {
    if (str[start] !== str[end]) {
      return false
    }
    start++
    end--
  }

  return true;
};

console.log(isPalindrome("racecar"));
