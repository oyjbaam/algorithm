// 콜라 문제
function solution(a, b, n) {
  var answer = 0
  let bottle = n

  // console.log(n / a)
  while (bottle >= a) {
    let exchangedBottles = Math.floor(bottle / a)
    answer += exchangedBottles * b
    bottle = exchangedBottles * b + (bottle % a)
  }

  return answer
}

// 공통 분모

function solution(numer1, denom1, numer2, denom2) {
  const lcd = denom1 * denom2
  const newNumber1 = numer1 * (lcd / denom1)
  const newNumber2 = numer2 * (lcd / denom2)
  const sumNumber = newNumber1 + newNumber2
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
  const divisor = gcd(sumNumber, lcd)
  return [sumNumber / divisor, lcd / divisor]
}
