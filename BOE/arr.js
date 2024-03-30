// 별 찍기
function solution() {
  let str = ""
  for (let i = 5; i > 0; i--) {
    for (let j = 0; j < 5; j++) {
      if (j < i - 1) {
        str += " "
      } else {
        str += "*"
      }
    }
    str += "\n"
  }
  console.log(str)
}

solution()
