'use strict'
import Slider from './modules/slider'
import VideoPlayer from './modules/playVideo'

window.addEventListener('DOMContentLoaded', () => {
	const slider = new Slider('.page', '.next')
	slider.render()

  const videoPlayer = new VideoPlayer('.showup .play', '.overlay')
  videoPlayer.init()
})

// json-server src/db.json
// gulp