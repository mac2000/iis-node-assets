import autoprefixer from 'gulp-autoprefixer'
import babelify from 'babelify'
import browserify from 'gulp-browserify'
import gulp from 'gulp'
import cssnano from 'gulp-cssnano'
import path from 'path'
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import uglify from 'gulp-uglify'

gulp.task('js', () => gulp.src('./src/**/*.js')
	.pipe(sourcemaps.init())
	.pipe(browserify({transform: babelify}))
	.pipe(uglify())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./dist')))

gulp.task('css', () => gulp.src('./src/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({includePaths: ['src']}).on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(cssnano())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./dist/')))

gulp.task('default', ['js', 'css'])
