const sliderContainer = document.querySelector('.slider-container')
const sliderRight = document.querySelector('.right-slide')
const sliderLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const sliderLength = sliderRight.querySelectorAll('div').length

// 当前激活的滑块索引
let activeSlideIndex = 0
// 初始化左侧滑块位置，向上移动 (总长度-1) 个视口高度
// 例如有 4 个滑块，则向上移动 3 * 100vh
sliderLeft.style.top = `-${(sliderLength - 1) * 100}vh`

// 为上下按钮添加点击事件监听器
upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

// 添加键盘事件
document.addEventListener('keydown', e => {
  // console.log(e);
  if (e.key === 'ArrowUp') {
    changeSlide('up')
  } else if (e.key === 'ArrowDown') {
    changeSlide('down')
  }
})

const changeSlide = (direction) => {
  // 获取滑块容器的当前高度（像素值）
  const sliderHeight = sliderContainer.clientHeight  

  if (direction === 'up') {
    // 向上滑动时索引增加
    activeSlideIndex++
    // 到达末尾时重置为开始
    if (activeSlideIndex > sliderLength - 1) {
      activeSlideIndex = 0
    }
  } else if (direction === 'down') {
    // 向下滑动时索引减少
    activeSlideIndex--
    // 到达开始时重置为末尾
    if (activeSlideIndex < 0) {
      activeSlideIndex = sliderLength - 1
    }
  }

  // 使用 transform 设置滑块位置
  // 右侧向上移动：负值 * 当前索引 * 高度
  sliderRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
  // 左侧向下移动：正值 * 当前索引 * 高度
  sliderLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}
