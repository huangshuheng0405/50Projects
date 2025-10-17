const codes = document.querySelectorAll('.code')
// 一开始默认是第一个获得焦点
codes[0].focus()

codes.forEach((code, index) => {
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      // 因为是keydown 此时按下的数字还未进入calue 这里是清空旧值
      codes[index].value = ''
      setTimeout(() => {
        if (index < codes.length - 1) {
          codes[index + 1].focus()
        }
      }, 10)
    } else if (e.key === 'Backspace') {
      setTimeout(() => {
        if (index > 0) {
          codes[index - 1].focus()
        }
      }, 10)
    }
  })
})
