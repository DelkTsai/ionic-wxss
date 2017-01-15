const gulp      = require('gulp')
const concat    = require('gulp-concat')
const sass      = require('gulp-sass')
const minifyCss = require('gulp-minify-css')
const rename    = require('gulp-rename')

const paths = {
	app : './src/ionic/ionic.app.scss',
	sass: './src/ionic/**/*.scss',
}

gulp.task('default', ['sass'])

gulp.task('sass', (done) => {
	gulp.src(paths.app)
	.pipe(sass())
	.on('error', sass.logError)
	.pipe(rename({ extname: '.wxss' }))
	.pipe(gulp.dest('./dist/'))
	.pipe(minifyCss({ keepSpecialComments: 0 }))
	.pipe(rename({ extname: '.min.wxss' }))
	.pipe(gulp.dest('./dist/'))
	.on('end', done)
})

gulp.task('watch', ['sass'], () => gulp.watch([paths.sass], ['sass']))