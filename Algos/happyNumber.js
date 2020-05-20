const isHappy = (n) => {
  let result = n;
  let visited = {};

  while(result !== 1) {
    let digits = getDigits(result)
    result = digits.reduce((acc, cur) => acc + Math.pow(cur, 2), 0)

    if (!visited[result]) {
      visited[result] = true
    } else {
      return false
    }
  }
  return true
}

const getDigits = (num) => {
  return num.toString().split("").map(str => +str)
}


console.log(isHappy(19))