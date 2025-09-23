const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

// 确保初始可见
checkBoxes()

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4

  boxes.forEach((box) => {
    // 返回元素的大小及其相对于视口的位置
    const boxTop = box.getBoundingClientRect().top

    // 小于视口高度就添加show
    if (boxTop < triggerBottom) { 
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
