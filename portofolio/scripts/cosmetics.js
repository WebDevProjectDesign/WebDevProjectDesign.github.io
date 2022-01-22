/*========== animated header and scroll up==========*/
window.addEventListener('scroll', ()=>{
    const logo = document.querySelector('.second-piece')
    const nav = document.querySelectorAll('.nav-link')
    const header = document.querySelector('.header')
    const goUpBtn = document.querySelector('.go-up-button')
    const lines = document.querySelectorAll('.line')

    if(window.scrollY > 120){
        header.classList.add('scrolled')
        logo.classList.add('invert')
       nav.forEach( item =>{
            item.classList.add('invert')
       })
        lines.forEach( element =>{
            element.classList.add('inverted')
       })
       goUpBtn.style.opacity = 1
       goUpBtn.addEventListener('click',()=>{
           window.scrollTo(0,0)
       })
    }
    else if(window.scrollY < 120){
        header.style.transition = 'all 0.3s ease'
        header.classList.remove('scrolled')
        logo.classList.remove('invert')
        goUpBtn.style.opacity = 0
         nav.forEach( item =>{
            item.classList.remove('invert')
       })
       lines.forEach( element =>{
            element.classList.remove('inverted')
       })
    }
})

/*========== responsive navbar script ==========*/
function slideIn(){
const burger = document.querySelector('.burger')
const navbar = document.querySelector('nav')
const line = burger.children
console.log(line)

burger.addEventListener('click', function(){
    navbar.style.transition = "all 0.5s ease-in-out"
    navbar.classList.toggle('opened')
})
window.addEventListener('resize', ()=>{
    if(window.innerWidth > 768){
        navbar.classList.remove('opened')
    }
})
}
slideIn()


