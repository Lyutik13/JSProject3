export default class Slider {
	constructor(page, btns) {
		this.page = document.querySelector(page)
		this.slides = Array.from(this.page.children)
		this.btns = document.querySelectorAll(btns)
		this.slideIndex = 1
	}

	showSlides(n) {
		if (n > this.slides.length) {
			this.slideIndex = 1
		}

		if (n < 1) {
			this.slideIndex = this.slides.length
		}

    // скрываем на 3-м слайде модалку
		try {
			this.hanson.style.opacity = '0'

      if (n === 3) {
        this.hanson.classList.add('animate__animated')
        setTimeout(() => {
          this.hanson.style.opacity = 1 
          this.hanson.classList.add('animate__fadeInUp')
        }, 3000)
      } else {
        this.hanson.classList.remove('animate__fadeInUp')
      }
		} catch (e) {}

		this.slides.forEach((slide) => {
			slide.style.display = 'none'
		})

		this.slides[this.slideIndex - 1].style.display = 'block'
	}

	plusSlides(n) {
		this.showSlides((this.slideIndex += n))
	}

	render() {
		// обработчик ошибки для ....hanson
		try {
			this.hanson = document.querySelector('.hanson')
		} catch (e) {}

		this.btns.forEach((item) => {
			item.addEventListener('click', () => {
				this.plusSlides(1)
			})

			item.parentNode.previousElementSibling.addEventListener('click', (e) => {
				e.preventDefault()
				this.slideIndex = 1
				this.showSlides(this.slideIndex)
			})
		})

		this.showSlides(this.slideIndex)
	}
}
