/*========== SKILLS RANGE ANIMATION SCRIPT ==========*/
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const range = document.querySelectorAll('.range-pointer');

gsap.from(range, {width: 0,stagger: 0.1, duration: 1,
scrollTrigger: {
    trigger: '.skills-range',
     start: 'top 90%',
    }
} );


/*========== HERO ANIMATION SCRIPT ==========*/
const hero = document.querySelector('.hero')

gsap.from(hero, {opacity: 0, y: -50, duration: 1})

/*========== FAQ BARS ANIMATION SCRIPT ==========*/
const oddBar = document.querySelectorAll('.faq-odd')
const evenBar = document.querySelectorAll('.faq-even')

gsap.fromTo(oddBar, {x: -1000}, {x: 0, duration: 1, stagger: 0.2,
scrollTrigger:{
    trigger: '.faq-odd',
    start: 'top bottom'
}
})

gsap.fromTo(evenBar, {x: 1000}, {x: 0, duration: 1, stagger: 0.2,
scrollTrigger:{
    trigger: '.faq-even',
    start: 'top bottom'
}
})
/*========== SKILLS CARDS ANIMATION SCRIPT ==========*/
const cards = document.querySelectorAll('.card')
gsap.from(cards, {opacity: 0, duration: 1.5,
scrollTrigger: {
    trigger: '.subtitle',
    start: 'top 70%'
}
})