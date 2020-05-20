const groupAnagrams = strs => {
  let obj = new Map();
  let newArr = [];

  for(let i = 0; i < strs.length; i++) {
    let currStr = strs[i].split("").sort().join("")
    if (!obj[currStr]) {
      obj[currStr] = []
      obj[currStr].push(strs[i])
    } else {
      obj[currStr].push(strs[i])
    }
  }

  for (let key in obj) {
    newArr.push(obj[key])
  }

  return newArr
}


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))