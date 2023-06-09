'use strict'
import MainSlider from './modules/slider/slider-main'
import VideoPlayer from './modules/playVideo'
import MiniSlider from './modules/slider/slider-mini'
import Difference from './modules/difference'
import Form from './modules/form'
import ShowInfo from './modules/showInfo'
import Download from './modules/download'

window.addEventListener('DOMContentLoaded', () => {
	const slider = new MainSlider({ container: '.page', btns: '.next' })
	slider.render()

  const modulesPageSlider = new MainSlider({container: '.moduleapp', btns:'.next'})
  modulesPageSlider.render()

	new VideoPlayer('.showup .play', '.overlay').init()
	new VideoPlayer('.module__video-item .play', '.overlay').init()

	const showUpSlider = new MiniSlider({
		container: '.showup__content-slider',
		next: '.showup__next',
		prev: '.showup__prev',
		activeClass: 'card-active',
		animate: true,
	})
	showUpSlider.init()

	const modulesSlider = new MiniSlider({
		container: '.modules__content-slider',
		next: '.modules__info-btns .slick-next',
		prev: '.modules__info-btns .slick-prev',
		activeClass: 'card-active',
		animate: true,
    autoplay: true
	})
	modulesSlider.init()

	const feedSlider = new MiniSlider({
		container: '.feed__slider',
		next: '.feed__slider .slick-next',
		prev: '.feed__slider .slick-prev',
    activeClass: 'feed__item-active',
	})
	feedSlider.init()

  new Difference('.officerold', '.officernew', '.officer__card-item').init()

  new Form('.form').init()

  new ShowInfo('.plus__content').init()

  new Download('.download').init()
})

// json-server src/db.json
// gulp
