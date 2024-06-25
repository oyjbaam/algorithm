// 빈도수 세기
export const same = (a, b) => {
  // if (a.length !== b.length) return false

  let frequencyCnt1 = {}
  let frequencyCnt2 = {}

  for (const val of a) {
    frequencyCnt1[val] = (frequencyCnt1[val] || 0) + 1
  }

  for (const val of b) {
    frequencyCnt2[val] = (frequencyCnt2[val] || 0) + 1
  }

  for (const key in frequencyCnt1) {
    if (!(key ** 2 in frequencyCnt2)) {
      return false
    }

    if (frequencyCnt2[key ** 2] !== frequencyCnt1[key]) {
      return false
    }
  }

  return true
}

console.log(same([1, 3, 9], [81, 1, 9]))

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

console.log(validanagram('', ''))
console.log(validanagram('aaz', 'zza'))
console.log(validanagram('anagram', 'nagaram'))
console.log(validanagram('awesome', 'awesom'))
console.log(validanagram('qwerty', 'qeywrt'))

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
