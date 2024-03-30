// https://school.programmers.co.kr/learn/courses/30/lessons/12950

/* 
  행렬의 덧셈
*/

function solution(arr1, arr2) {
  var answer = []
  // console.log(answer)
  for (let i = 0; i < arr1.length; i++) {
    answer.push([])
    for (let j = 0; j < arr1[i].length; j++) {
      // console.log(answer[i])
      // console.log(arr1[i].length)
      answer[i].push(arr1[i][j] + arr2[i][j])
    }
  }
  console.log(answer)
  return answer
}
solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
)

// 다른 사람 풀이
function sumMatrix(A, B) {
  return A.map((arr1, idx1) => arr1.map((val, idx2) => val + B[idx1][idx2]))
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(
  sumMatrix(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
)
