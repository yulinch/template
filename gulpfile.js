var gulp = require('gulp'),
    sass = require('gulp-sass'),
    // autoprefixer = require('gulp-autoprefixer'),
    autoprefixer = require('autoprefixer'),
    postcss = require('gulp-postcss'),
    // sassGlob = require('gulp-sass-glob'),
    filter  = require('gulp-filter'),
    // gulpImagemin = require('gulp-imagemin'),
    gulpPlumber = require('gulp-plumber'),
    gulpNotify = require("gulp-notify"),
    del = require('del');

gulp.task('clean', function(done) {
  del(['build']);
  done();
});

gulp.task('sass', function(){
    // var processors = [                                 // 定義 postCSS 所需要的元件
    //     autoprefixer({browsers: ['last 5 version']})   // 使用 autoprefixer，這邊定義最新的五個版本瀏覽器
    // ];
	return gulp.src('sass/**/*.sass')
    // .pipe(autoprefixer())
	// .pipe(sass().on('error', sass.logError))
	.pipe(sass({
		outputStyle: 'nested'
	}))
    .pipe(postcss([ autoprefixer({
        browsers: ['last 5 version']
    }) ]))
	.pipe(gulp.dest('css'))
	// .pipe(gulpNotify("Websites CSS Finish"));
	done();
});

gulp.task('watch', function(){
	return gulp.watch('sass/**/*.sass', gulp.series('sass'));
})