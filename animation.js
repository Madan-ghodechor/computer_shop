document.addEventListener('DOMContentLoaded', ()=>{

    anime({
        targets:'.fade',
        translateX:[-100, 0],
        easing:'easeOutExpo',
        duration:5000,
        delay:500,
        opacity:[0,1]
    })
    anime({
        targets:'.bottomUp',
        translateY: [70,0],
        easing:'easeOutExpo',
        duration:1300,
        delay:(el, i) => {
            return 400 + 200 * i;
        },
        opacity:[0,1]
    })
    anime({
      targets:'.topDown',
      translateY: [-20,0],
      easing:'easeInOutQuad',
      duration:700,
      delay:anime.stagger(200, {start: 500}),
      opacity:[0,1]
    })
})

function clickme()
{
  anime({
    targets:'.clickEffect',
    translateY: [-20,0],
    easing:'easeInOutQuad',
    duration:700,
    delay:anime.stagger(100, {start: 300}),
    opacity:[0,1]
  })
}
