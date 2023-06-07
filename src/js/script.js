'use strict'
import MainSlider from './modules/slider/slider-main'
import VideoPlayer from './modules/playVideo'

window.addEventListener('DOMContentLoaded', () => {
	const slider = new MainSlider({ page: '.page', btns: '.next' })
	slider.render()

	const videoPlayer = new VideoPlayer('.showup .play', '.overlay')
	videoPlayer.init()
})

// json-server src/db.json
// gulp
