'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');


gulp.task('styles', () => {
    return gulp.src('./scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'));
});



gulp.task('default', gulp.series('styles'));