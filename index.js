function solution(num_list) {
  const numListSum = num_list.reduce((acc, cur) => acc * cur)
  const numListSqure = num_list.reduce((acc, cur) => acc + cur)
  console.log(numListSqure * numListSqure)
  return numListSum > numListSqure ** 2 ? 0 : 1
}
solution([3, 4, 5, 2, 1])
