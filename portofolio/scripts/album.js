function Photo(item, img, link) {
    this.item = item
    this.img = item.children[0]
    this.link = item.children[1]


}
let prevBtn = document.querySelector('.prev-button')
let nextBtn = document.querySelector('.next-button')

let currSlide = new Photo(document.querySelector('.current-element'))
let nextSlide = new Photo(document.querySelector('.next-element'))

nextBtn.addEventListener('click', () => {

    console.log(currSlide.img) //powinno być photo1 a jest photo5
    currSlide.img.setAttribute('src', nextSlide.img.getAttribute('src')) //tutaj nastepuje zmiana z photo1 na photo5
    console.log(currSlide.img) //dopiero tutaj powinno być photo5
})

