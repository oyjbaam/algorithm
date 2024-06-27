// let input = 'baaa'
// let b = input.split('').reduce((acc, cur) => {
//   if (cur in acc) {
//     acc[cur]++
//   } else {
//     acc[cur] = 1
//   }
//   return acc
// }, {})
// const getMaxKey = obj1 => {
//   const maxVal = Math.max(...Object.values(obj1))
//   const maxKey = Object.keys(obj1).filter(num => obj1[num] === maxVal)
//   return maxKey.length === 1 ? maxKey[0] : '?'
// }
// console.log(getMaxKey(b))

// function getMaxOccurrence(input) {
//   const charMap = new Map()

//   // 입력 문자열을 순회하면서 빈도수 카운트
//   for (let char of input) {
//     charMap.set(char, (charMap.get(char) || 0) + 1)
//   }
//   console.log(charMap)
//   // 빈도수가 가장 높은 문자 찾기
//   let maxChar = ''
//   let maxCount = 0
//   charMap.forEach((count, char) => {
//     if (count > maxCount) {
//       maxChar = char
//       maxCount = count
//     }
//   })

//   // 가장 높은 빈도수를 가진 문자 반환
//   return maxChar
// }

// getMaxOccurrence(input)

const validanagram = (a, b) => {
  let frequencyCnt1 = {}
  let frequencyCnt2 = {}

  for (const key of a) {
    frequencyCnt1[key] = (frequencyCnt1[key] || 0) + 1
  }
  for (const key of b) {
    frequencyCnt2[key] = (frequencyCnt2[key] || 0) + 1
  }

  for (const key in frequencyCnt1) {
    if (!(key in frequencyCnt2)) {
      return false
    }
    if (frequencyCnt1[key] !== frequencyCnt2[key]) {
      return false
    }
  }

  return true
}

const validanagram2 = (a, b) => {
  if (a.length !== b.length) return false

  const lookup = {}

  for (let i = 0; i < a.length; i++) {
    let letter = a[i]
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1)
  }
  for (let i = 0; i < b.length; i++) {
    let letter = b[i]

    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1
    }
  }

  return true
}

console.log(validanagram2('', ''))
console.log(validanagram2('aaz', 'zza'))
console.log(validanagram2('anagram', 'nagaram'))
console.log(validanagram2('awesome', 'awesom'))
console.log(validanagram2('qwerty', 'qeywrt'))
