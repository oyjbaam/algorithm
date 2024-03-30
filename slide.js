const kSlider = (target) => {
  const tobeLoaded = document.querySelectorAll(`${target} img`)

  let loadedImages = 0
  if (tobeLoaded.length === 0) {
    throw new Error(`${target} 라는 노드를 찾지 못함`)
  }
  tobeLoaded.forEach(() => {
    loadedImages++
    if (loadedImages === tobeLoaded.length) innerName(target)
  })
}
const innerName = (target) => {
  const slider = document.querySelector(target)
  console.log(slider)
}
kSlider("#img_box")
