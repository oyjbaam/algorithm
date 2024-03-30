// 과제 안내신분

// 내꺼

let b = []
for (let i = 1; i <= input.length + 2; i++) {
  b.push(i)
}

let n = b.filter((x) => !input.includes(x))
console.log(n[0])
console.log(n[1])

// 다른사람

const checkList = Array.from({ length: 30 }, (v, i) => i + 1)
const student = input.map(Number)

let answer = []
for (let i = 0; i < checkList.length; i++) {
  if (!student.includes(checkList[i])) {
    answer.push(checkList[i])
  }
}

console.log(answer.join("\n"))
