// 7의 갯수 구하기
function solution(array) {
  var answer = 0

  let b = array.flatMap((i) =>
    i
      .toString()
      .split("")
      .filter((x) => x.includes("7"))
  )
  return b.length
}

// 다른 사람 풀이

function solution(array) {
  return Array.from(array.join("")).filter((v) => v === "7").length
}
