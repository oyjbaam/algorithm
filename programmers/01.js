/**
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/17681
 */
// 1차 비밀지도
function solution(n, arr1, arr2) {
  var answer = []
  for (let i = 0; i < n; i++) {
    const str = (arr1[i] | arr2[i]).toString(2)

    const splitStr = str.split('')
    while (splitStr.length < n) {
      splitStr.unshift('0')
    }
    const decLine = splitStr.map(i => (i === '1' ? '#' : ' ')).join('')
    answer.push(decLine)
  }

  return answer
}
// 다른 풀이

const solution = (n, arr1, arr2) => {
  const binaryStringArray1 = decimalToBinary(arr1, n)
  const binaryStringArray2 = decimalToBinary(arr2, n)
  const map1 = binaryStringArray1.map(splitToNumbers)
  const map2 = binaryStringArray2.map(splitToNumbers)
  const combinedMap = sumArray(map1, map2)

  return numberToSharpAndEmpty(combinedMap).map(v => v.join(''))
}

const numberToSharpAndEmpty = arr => {
  return arr.map((v1, i1) => {
    return v1.map((v2, i2) => {
      return v2 === 0 ? ' ' : '#'
    })
  })
}

const sumArray = (arr1, arr2) => arr1.map((v1, i1) => v1.map((v2, i2) => v2 + arr2[i1][i2]))

const decimalToBinary = (array, n) => array.map(item => item.toString(2).padStart(n, '0'))

const splitToNumbers = str => str.split('').map(e => Number(e))
solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])
// padStart에 대해 학습
