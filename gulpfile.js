'use strict'

const { src, dest, watch, parallel } = require('gulp')
const webpack = require('webpack-stream')
const browserSync = require('browser-sync').create()

const dist = './dist/'
// const dist = "V:/for_programing/ospanel/domains/test";

function html() {
	return src(['./src/*.html'], { base: 'src' }).pipe(dest(dist))
}

function scripts() {
	return src('./src/js/script.js')
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(dest(dist + '/js'))
		.pipe(browserSync.stream())
}

function bilds() {
	return src('./src/assets/**/*.*')
		.pipe(dest(dist + '/assets'))
		// .pipe(browserSync.stream())
}

function watching() {
	browserSync.init({
		server: {
			baseDir: './dist/',
			// несколько страниц html
			serveStaticOptions: {
				extensions: ['html'],
			},
		},
		port: 4000,
		notify: true, // Отключаем уведомления
		online: true, //Режим работы: true или false
	})

	watch(['./src/*.html'], html).on('change', browserSync.reload)
	watch(['./src/js/**/*.js'], scripts)
	watch(['./src/assets/**/*.*'], bilds)
}

exports.default = parallel(watching, html, scripts, bilds)
