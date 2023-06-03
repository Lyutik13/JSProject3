'use strict'

const gulp = require('gulp')
const webpack = require('webpack-stream')
const browsersync = require('browser-sync')

const dist = './dist/'
// const dist = "V:/for_programing/ospanel/domains/test";

gulp.task('copy-html', () => {
	return gulp
		.src('./src/*.html')
		.pipe(gulp.dest(dist))
		.pipe(browsersync.stream())
})

gulp.task('build-js', () => {
	return gulp
		.src('./src/js/script.js')
    .pipe(webpack(require('./webpack.config.js')))
		.pipe(gulp.dest(dist))
		.on('end', browsersync.reload)
})

gulp.task('copy-assets', () => {
	return gulp
		.src('./src/assets/**/*.*')
		.pipe(gulp.dest(dist + '/assets'))
		.on('end', browsersync.reload)
})

gulp.task('watch', () => {
	browsersync.init({
		server: {
			baseDir: './dist/',
      // несколько страниц html
			serveStaticOptions: {
				extensions: ['html'],
			},
		},
		port: 4000,
		notify: true,
	})

	gulp.watch('./src/*.html', gulp.parallel('copy-html'))
	gulp.watch('./src/assets/**/*.*', gulp.parallel('copy-assets'))
	gulp.watch('./src/js/**/*.js', gulp.parallel('build-js'))
})

gulp.task('build', gulp.parallel('copy-html', 'copy-assets', 'build-js'))

gulp.task('default', gulp.parallel('watch', 'build'))
