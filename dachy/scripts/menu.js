function slideIn(){
    const btn = document.querySelector('.burger')
    const nav = document.querySelector('.nav-list')

    btn.addEventListener('click',()=>{
        nav.style.transition= 'transform .5s ease'
        nav.classList.toggle('triggered')
        btn.classList.toggle('toggled')

    })
}
slideIn()