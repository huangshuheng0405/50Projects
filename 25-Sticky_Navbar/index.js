const nav = document.querySelector('.nav')
// 简单节流示例
let ticking = false
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      fixNav() // 你的判断函数
      ticking = false
    })
    ticking = true
  }
})

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}

