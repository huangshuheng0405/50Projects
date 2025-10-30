document.addEventListener('DOMContentLoaded', () => {
  let btns = document.querySelectorAll('.btns') 
  btns.forEach((btn) => {
    for (let i = 0; i < 40; i++) {
      let span = document.createElement('span')
      span.style.top = `${i * 2}px`
      // span.style.transitionDelay = `${i * 0.015}s`
      btn.appendChild(span)

      let randomDelay = (Math.random() * 0.75) + 0
      span.style.transitionDelay = randomDelay + 's'
    }
  })
})