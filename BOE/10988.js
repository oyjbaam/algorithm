let fs = require("fs")
let input = fs.readFileSync("dev/stdin").toString().trim()

let left = input.slice(0, Math.ceil(input.length / 2))
let right = input
  .split("")
  .reverse()
  .join("")
  .slice(0, Math.ceil(input.length / 2))
if (left === right) {
  console.log(1)
} else {
  console.log(0)
}
