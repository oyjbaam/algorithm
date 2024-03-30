// 옷가게 할인 받기

function solution(n) {
  if (n < 100000) return n
  if (n >= 100000 && n < 300000) return Math.floor(n - (n / 100) * 5)
  if (n >= 300000 && n < 500000) return Math.floor(n - (n / 100) * 10)
  if (n >= 500000) return Math.floor(n - (n / 100) * 20)
}

// OX 퀴즈

function solution(quiz) {
  var answer = quiz.map((str) => str.split(" = "))
  let result = []

  answer.forEach((str) => {
    result.push(eval(str[0]) === +str[1] ? "O" : "X")
  })

  return result
}

// 저주의 숫자 3

function solution(quiz) {
  let answer = 0

  function check(k) {
    const val = String(k).split("")
    if (k % 3 === 0 || val.includes("3")) {
      answer++
      check(answer)
    }
  }
  for (let i = 1; i <= quiz; i++) {
    answer++
    check(answer)
  }
  return answer
}

// 콜라츠 추측

// 1-1. 입력된 수가 짝수라면 2로 나눕니다.
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
function solution(n) {
  let count = 0
  while (n !== 1) {
    if (count === 500) return -1
    if (n % 2 === 0) {
      n = n / 2
    } else {
      n = n * 3 + 1
    }
    count++
  }
  return count
}

/* 두 정수 사이의 합
  두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
  예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
  제한 조건
  a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
  a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
  a와 b의 대소관계는 정해져있지 않습니다.
*/
function solution(a, b) {
  let answer = 0
  let min = Math.min(a, b)
  let max = Math.max(a, b)

  if (a === b) return a
  for (let i = min; i <= max; i++) {
    answer += i
  }
  console.log(answer)
  return answer
}
solution(5, 3)

// 이상한 문자 만들기
function solution(s) {
  var answer = s
    .split(" ", -1)
    .map((x) =>
      x
        .split("")
        .map((t, i) => (i % 2 === 0 ? t.toUpperCase() : t.toLowerCase()))
        .join("")
    )
    .join(" ")

  return answer
}

//푸드 파이트 대회
function solution(food) {
  let result = []
  // var answer = food
  //   .map((x) => Math.floor(x / 2))
  //   .map((a, index) => {
  //     for (let i = 0; i < a; i++) {
  //       result.push(index)
  //     }
  //   })

  // refactor
  var answer = food.map((x, i) => String(i).repeat(Math.floor(x / 2)))

  // gpt
  // const answer = food.reduce((acc, cur, i) => {
  //   return acc + String(i).repeat(Math.floor(cur / 2));
  // }, "");
  // return answer + answer.split("").reverse().join("");

  return [...result, 0, ...result.reverse()].join("")
}
solution([1, 7, 1, 2])
