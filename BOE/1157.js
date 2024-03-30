let input = require("fs").readFileSync("dev/stdin").toString().trim().toUpperCase()
let b = input.split("").reduce((acc, cur) => {
  if (cur in acc) {
    acc[cur]++
  } else {
    acc[cur] = 1
  }
  return acc
}, {})
const getMaxKey = (obj1) => {
  const maxVal = Math.max(...Object.values(obj1))
  const maxKey = Object.keys(obj1).filter((num) => obj1[num] === maxVal)
  return maxKey.length === 1 ? maxKey[0] : "?"
}
console.log(getMaxKey(b))
