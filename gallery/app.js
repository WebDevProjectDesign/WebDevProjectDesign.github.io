const photos = document.querySelectorAll('[data-galleryImage] img')
const modal = document.querySelector('[data-galleryModal]')
const closeBtn = document.querySelector('[data-closeModal]')
const nextSlideBtn = document.querySelector('[data-nextSlide]')
const prevSlideBtn = document.querySelector('[data-previousSlide]')
const modalInfo = document.querySelector('[data-modalDescription]')
const modalImage = document.querySelector('[data-currentSlide]')
let currentPhoto

// FUNCTIONS
const openModal = image => {
	modal.classList.remove('hidden')
	modalImage.setAttribute('src', image)
}
const closeModal = () => {
	modal.classList.add('fade-out')
	setTimeout(() => {
		modal.classList.add('hidden')
		modal.classList.remove('fade-out')
	}, 400)
}

const nextSlide = () => {
	if (currentPhoto == photos.length - 1) {
		currentPhoto = 0
	} else {
		currentPhoto++
	}
	modalImage.classList.add('slide-fadeOut')
	setTimeout(() => {
		modalImage.classList.remove('slide-fadeOut')
		modalImage.src = photos[currentPhoto].src
	}, 200)
	modalInfo.textContent = `Zdjęcie ${currentPhoto + 1} z ${photos.length}`
}

const previousSlide = () => {
	if (currentPhoto == 0) {
		currentPhoto = photos.length - 1
	} else {
		currentPhoto--
	}
	modalImage.classList.add('slide-fadeOut')
	setTimeout(() => {
		modalImage.classList.remove('slide-fadeOut')
		modalImage.src = photos[currentPhoto].src
	}, 200)
	modalInfo.textContent = `Zdjęcie ${currentPhoto + 1} z ${photos.length}`
}

// EVENT LISTENERS
photos.forEach((photo, index) => {
	photo.addEventListener('click', e => {
		openModal(e.target.getAttribute('src'))
		currentPhoto = index
		modalInfo.textContent = `Zdjęcie ${currentPhoto + 1} z ${photos.length}`
	})
})

nextSlideBtn.addEventListener('click', nextSlide)
prevSlideBtn.addEventListener('click', previousSlide)
closeBtn.addEventListener('click', closeModal)
document.addEventListener('keydown', e => {
	if (e.code == 'ArrowRight') {
		nextSlide()
	} else if (e.code == 'ArrowLeft') {
		previousSlide()
	} else if (e.code == 'Escape') {
		closeModal()
	}
})
