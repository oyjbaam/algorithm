// 문자열 밀기
function solution(a, b) {
  if (a === b) return 0
  return (b + b).indexOf(a)
}

// 약수 갯수 구하기

function solution(n) {
  let arr = []
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i)
    }
  }

  return arr.length
}
