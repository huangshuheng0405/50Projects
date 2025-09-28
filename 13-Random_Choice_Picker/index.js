const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
  // 创建新标签
  createTags(e.target.value)

  // 10ms 后清空输入框
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 10)

    // 随机选择标签
    randomSelect()
  }
})

function createTags(input) {
  // filter 过滤空标签
  // map 去除每个标签前后的空格
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim())
  // 清空标签容器
  tagsEl.innerHTML = ''
  // 为每个标签添加span元素 添加tag类  设置文本内容并添加容器
  tags.forEach((tag) => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    // 设置文本内容
    tagEl.innerText = tag
    // 加到容器
    tagsEl.appendChild(tagEl)
  })
}
// 随机选择函数
function randomSelect() {
  const times = 30
  // 设置定时器 实现标签闪烁的效果
  const interval = setInterval(() => {
    const randomTag = pickRandomTag()

    if (randomTag !== undefined) {
      highlightTag(randomTag)
      // 100ms 后取消高亮
      setTimeout(() => {
        unHighlightTag(randomTag)
      }, 100)
    }
  }, 100) // 每100ms执行一次

  setTimeout(() => {
    // 清除定时器
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag() // 最终选中的高亮标签

      highlightTag(randomTag)
    }, 100)
  }, times * 100) // 
}
// 随机选择tag标签
function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  tag.classList.add('highlight')
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight')
}
