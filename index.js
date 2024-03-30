function solution(arr) {
  const rowCount = arr.length // 행 2
  const colCount = arr[0].length // 열 4
  const DIFF = Math.abs(rowCount - colCount)
  if (rowCount === colCount) return arr
  if (rowCount > colCount) {
    for (let i = 0; i < rowCount; i++) {
      for (let j = 0; j < DIFF; j++) {
        arr[i].push(0)
      }
    }
  } else if (rowCount < colCount) {
    for (let i = 0; i < DIFF; i++) {
      arr.push(Array(colCount).fill(0))
    }
  }

  return arr
}
solution([
  [57, 192, 534, 2, 534, 2, 534, 2, 534, 2, 534, 2],
  [57, 192, 534, 2, 534, 2, 534, 2, 534, 2, 534, 2],
])
//
//열심히 합시다.

function FlagStateComponent() {
  const isLogin = hasToken || hasCookie || isValidCookie || isNewUser === false || isValidToken
}
