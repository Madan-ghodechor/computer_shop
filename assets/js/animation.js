document.addEventListener('DOMContentLoaded', () => {

  anime({
    targets: '.fade',
    translateX: [-100, 0],
    easing: 'easeOutExpo',
    duration: 5000,
    delay: 500,
    opacity: [0, 1]
  })
  anime({
    targets: '.bottomUp',
    translateY: [70, 0],
    easing: 'easeOutExpo',
    duration: 1300,
    delay: (el, i) => {
      return 400 + 200 * i;
    },
    opacity: [0, 1]
  })
  anime({
    targets: '.topDown',
    translateY: [-20, 0],
    easing: 'easeInOutQuad',
    duration: 700,
    delay: anime.stagger(200, { start: 500 }),
    opacity: [0, 1]
  })
  anime({
    targets: '.leftRight',
    translateX: [-100, 0],
    easing: 'easeOutExpo',
    duration: 5000,
    delay: 500,
    opacity: [0, 1]
  })
  anime({
    targets: '.Rightleft',
    translateX: [100, 0],
    easing: 'easeOutExpo',
    duration: 5000,
    delay: 500,
    opacity: [0, 1]
  })
  anime({
    targets: '.call',
    translateY: [1000, 0],
    easing: 'easeOutExpo',
    duration: 40,
    delay: anime.stagger(14, { start: 200 }),
    opacity: [0, 1]
  })

})

function bar()
{
  anime({
    targets: '.call',
    translateY: [1000, 0],
    easing: 'easeOutExpo',
    duration: 40,
    delay: anime.stagger(14, { start: 200 }),
    opacity: [0, 1]
  })
}
function clickme() {
  anime({
    targets: '.clickEffect',
    translateY: [-20, 0],
    easing: 'easeInOutQuad',
    duration: 300,
    delay: anime.stagger(20, { start: 300 }),
    opacity: [0, 1]
  })
}

const obserer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('')

    }
    else {
      entry.target.bar()
    }
  })
})