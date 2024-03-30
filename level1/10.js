// 시저 암호
function solution(s, n) {
  let answer = ""
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") answer += " "
    else if (s[i] >= "A" && s[i] <= "Z") {
      answer += String.fromCharCode(((s[i].charCodeAt(0) - 65 + n) % 26) + 65)
    } else {
      answer += String.fromCharCode(((s[i].charCodeAt(0) - 97 + n) % 26) + 97)
    }
  }
  let b = (("a".charCodeAt(0) - 65 + n) % 26) + 65
  console.log(String.fromCharCode(b))
  // console.log('a'.charCodeAt(0) - 65)
  // console.log(answer)
  //  let a= s.split(' ').map(x => String.fromCharCode(x.charCodeAt() + n)).join('')
  //   console.log(a)
}
solution("a B z", 4)
