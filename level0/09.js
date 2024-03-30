/**
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/181929
 */

function solution(num_list) {
  const numListSum = num_list.reduce((acc, cur) => acc * cur)
  const numListSqure = num_list.reduce((acc, cur) => acc + cur)
  return numListSum > numListSqure ** 2 ? 0 : 1
}
