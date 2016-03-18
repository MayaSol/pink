'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function () {
    console.log("gulp default");
});

gulp.task('sass', function () {
    return gulp.src('./app/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./app/scss/**/*.scss', ['sass']);
});