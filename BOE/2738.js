// 행렬 덧셈
let fs = require("fs")
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n")

let arr = []
const [n, m] = input[0].split(" ").map(Number)

for (let i = 1; i < input.length; i++) {
  arr.push(...input[i].split(" ").map(Number))
}

let answer = []
for (let j = 0; j < arr.length; j++) {
  if (!isNaN(arr[j] + arr[j + n * m])) answer.push(arr[j] + arr[j + n * m])
}

let str = ""
for (let k = 1; k <= answer.length; k++) {
  if (k % n === 0) {
    str += String(answer[k - 1]) + "\n"
  } else {
    str += String(answer[k - 1]) + " "
  }
}
console.log(str)
