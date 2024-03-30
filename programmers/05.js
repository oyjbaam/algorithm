// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  const answer = []
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j]
      if (!answer.includes(sum)) {
        // 중복 방지를 위한 조건문
        answer.push(sum)
      }
    }
  }
  answer.sort((a, b) => a - b) // 오름차순 정렬

  return answer
}
solution([2, 1, 3, 4, 1])
