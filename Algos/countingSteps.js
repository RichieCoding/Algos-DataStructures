// If (row === n) we have hit the end of our problem
// If the 'stair has a length === n then we are at the end of a row
// If the length of the stair string is less than or equal to the row number we're working on, we add '#', otherwise we add a space
const countingSteps = num => {
  for (let i = 0; i < num; i++) {
    let str = "";
    for (let j = 0; j < num - i - 1; j++) {
      str += " ";
    }
    for (let j = 0; j < num; j++) {
      if (j <= i) {
        str += "#";
      }
    }
    console.log(str);
  }
};

// Recursive Solution
const recursiveSteps = (n, row = 0, stair = "") => {
  if (n === row) return;
  if (n === stair.length) {
    console.log(stair);
    recursiveSteps(n, row + 1);
    return;
  }
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  recursiveSteps(n, row, stair)
};

countingSteps(6);
recursiveSteps(6);
