const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach((toggle) => {
  toggle.addEventListener('change', (e) => {
    // console.log(e.target, e.target.tagName, e.target.id, e.target.type);
    doTheTrick(e.target)
  })
})

function doTheTrick(theClickeOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickeOne) {
      fast.checked = false
    }
    if (cheap === theClickeOne) {
      good.checked = false
    }
    if (fast === theClickeOne) {
      cheap.checked = false
    }
  }
}
