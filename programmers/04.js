// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(strings) {
  var answer = ''
  const numberPack = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  }
  for (const x in numberPack) {
    let letter = numberPack[x]
    const letterRex = new RegExp(letter, 'gi')

    strings = strings.replace(letterRex, +x)
  }
  console.log(strings)
  // for (const x in numberPack) {
  //   let letter = numberPack[x]
  //   const letterRex = new RegExp(letter, 'gi')
  //   strings = strings.replace(letterRex, x)
  //   answer = strings
  // }
  return +answer
}

solution('one4seveneight')

// 다른사람 풀이

function solution(s) {
  let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  var answer = s

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i])
    answer = arr.join(i)
  }

  return Number(answer)
}
