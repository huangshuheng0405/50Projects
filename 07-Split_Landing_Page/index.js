const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

// Mouse hover behavior (desktop)
left.addEventListener('mouseenter', () => {
  container.classList.add('hover-left')
  container.classList.remove('hover-right')
})
left.addEventListener('mouseleave', () => {
  container.classList.remove('hover-left')
})

right.addEventListener('mouseenter', () => {
  container.classList.add('hover-right')
  container.classList.remove('hover-left')
})
right.addEventListener('mouseleave', () => {
  container.classList.remove('hover-right')
})

// Click/touch toggle behavior (touch devices and keyboard users)
function activateLeft() {
  container.classList.add('hover-left')
  container.classList.remove('hover-right')
}
function activateRight() {
  container.classList.add('hover-right')
  container.classList.remove('hover-left')
}
function resetHover() {
  container.classList.remove('hover-left')
  container.classList.remove('hover-right')
}

left.addEventListener('click', (e) => {
  activateLeft()
})
right.addEventListener('click', (e) => {
  activateRight()
})

left.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    activateLeft()
  }
})
right.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    activateRight()
  }
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    resetHover()
  }
  if (e.key === 'ArrowLeft') {
    activateLeft()
  }
  if (e.key === 'ArrowRight') {
    activateRight()
  }
})