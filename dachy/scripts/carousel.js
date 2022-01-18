const slides = document.querySelector('.slides')
const images = document.querySelectorAll('.slide')

//BUTTONS

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

let index = 1
let size = images[0].clientWidth

//set first slide
slides.style.transform = `translateX(${-size * index}px)`

//next slide btn

nextBtn.addEventListener('click', ()=>{
    if(index >= images.length-1) return
    slides.style.transition = 'transform 0.6s ease'
    index++
    slides.style.transform = `translateX(${-size * index}px)`
   // console.log(-size*index)

})

//prev slide btn

prevBtn.addEventListener('click',()=>{
    if(index <= 0 ) return
    slides.style.transition = 'transform 0.6s ease'
    index--
    slides.style.transform = `translateX(${-size * index}px)`
   // console.log(-size*index)
})

//loop

slides.addEventListener('transitionend',()=>{
    if(images[index].id ==='last-item'){
        slides.style.transition = 'none'
        index = images.length - 2
        slides.style.transform = `translateX(${-size * index}px)`
    }
    if(images[index].id === 'first-item'){
        slides.style.transition='none'
        index = 1
        slides.style.transform = `translateX(${-size * index}px)`
    }
})

//auto slide

function autoSlide(){
    if(index >= images.length-1) return
    slides.style.transition = 'transform 0.6s ease'
    index++
    slides.style.transform = `translateX(${-size * index}px)`
   // console.log(-size*index)
}
//setInterval(autoSlide, 8000);

console.log(4*4)