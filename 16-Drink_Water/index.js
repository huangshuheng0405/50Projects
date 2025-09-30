const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

// 给每个小杯子添加点击事件
smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx))
})
// 处理小杯子高亮
function highlightCups(idx) {
  // 处理最后一个杯子的填充  如果已填充 点击则取消
  if (idx === 7 && smallCups[idx].classList.contains('full')) idx--
  else if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
    idx--
  }
  // 处理中间被子的情况  如果当前被子已填充且下一个未填充 点击取消当前杯子的填充

  // 其余情况就是把当前位置后面的杯子全部取消
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full')
    } else {
      // 把后面的杯子取消
      cup.classList.remove('full')
    }
  })
  // 更新
  updateBigCup()
}

function updateBigCup() {
  // 已填充的杯子数量
  const fullCups = document.querySelectorAll('.cup-small.full').length
  // 总数
  const totalCups = smallCups.length
  // 如果没填充则隐藏
  if (fullCups === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    // 显示百分比
    percentage.style.visibility = 'visible'
    percentage.style.height = `${(fullCups / totalCups) * 330}px`
    percentage.innerText = `${(fullCups / totalCups) * 100}%`
  }
  // 如果都填满  隐藏remained部分
  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    // 否则显示liters内容
    remained.style.visibility = 'visible'
    liters.innerHTML = `${2 - (250 * fullCups) / 1000}L`
  }
}
