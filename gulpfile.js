var gulp = require('gulp'),
	  sass = require('gulp-sass'),
	  sourcemaps = require('gulp-sourcemaps'),
	  autoprefixer = require('gulp-autoprefixer'),
	  browserSync = require('browser-sync'),
	  watch = require('gulp-watch');

// Style
gulp.task('sass', function() {
	return gulp.src('./scss/style.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./css/'))
	.pipe(browserSync.stream())
});

// Watch
gulp.task('serve', function() {
	browserSync.init({
		notify: false,
		server: "./"
	});

	gulp.watch('./scss/**/*.scss', gulp.series('sass'))
	gulp.watch('*.html').on('change', () => {
		browserSync.reload();
	});
});

gulp.task('default', gulp.series('sass', 'serve'));