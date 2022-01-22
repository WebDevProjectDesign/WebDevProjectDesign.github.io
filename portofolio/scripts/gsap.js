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