const progress = document.querySelector('.progress')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
  currentActive++
  // 防止越界
  if (currentActive > circles.length) {
    currentActive = circles.length
  }

  update() // 更新界面
})

prev.addEventListener('click', () => {
  currentActive--
  // 防止越界
  if (currentActive < 1) {
    currentActive = 1
  }

  update() // 更新界面
})

function update() { // 更新步骤圆圈的激活状态
  // 数组.forEach(当前元素,索引值,原数组)
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      // 当前及以前的步骤都激活
      circle.classList.add('active')
    } else {
      // 后面都未激活
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')
  // 更新进度条
  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  //控制按钮是否禁用
  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
