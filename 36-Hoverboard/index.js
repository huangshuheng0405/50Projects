const container = document.querySelector('.container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const squares = 500

//批量创建元素 减少回流
const frag = document.createDocumentFragment()
for (let i = 0; i < squares; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  frag.appendChild(square)
}
container.appendChild(frag)

// 减少添加事件监听 利用冒泡
container.addEventListener('pointerover', (e) => {
  console.log(e.target.closest);
  // closest 匹配离当前元素最近的祖先元素 也可以是当前元素本身 匹配不到返回null
  const sq = e.target.closest('.square')
  if (!sq) {
    return
  }
  setColor(sq)
})

container.addEventListener('pointerout', (e) => {
  const sq = e.target.closest('.square')
  if (!sq) {
    return
  }
  removeColor(sq)
})

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

function setColor(element) {
  const color = getRandomColor()
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.background = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}