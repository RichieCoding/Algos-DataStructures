const countingSteps = (num) => {
  for (let i = 0; i < num; i++) {
    let str = ""
    for (let j = 0; j < num - i - 1; j++) {
      str += " "
    }
    for (let j = 0; j < num; j++) {
      if (j <= i) {
        str += "#"
      }
    }
    console.log(str)
  }
}

countingSteps(6)