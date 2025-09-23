const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
let int = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerHTML = `${load}%`
  // 文字 逐渐变透明
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  // 背景逐渐变清晰
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// 将一个范围映射到另一个范围
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
