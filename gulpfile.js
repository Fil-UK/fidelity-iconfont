// gulpfile.js
var gulp = require('gulp');
var replace = require('gulp-replace');
var insert = require('gulp-insert');
var rename = require('gulp-rename');
var sass = require('gulp-sass');


gulp.task('map', function(){
  gulp.src(['./input-icomoon/variables.scss'])
    .pipe(replace('$icomoon-font-path: "fonts" !default;', '$icons-def: ('))
    .pipe(replace('$icon-', '    '))
    .pipe(replace(';', ','))
    .pipe(insert.append(');'))
    .pipe(rename("_icon-map.scss"))
    .pipe(gulp.dest('./output-endinvestor'))
    .pipe(gulp.dest('./output-flatsite'))
    .pipe(gulp.dest('./output-aws'));
});


gulp.task('sass-ie', function () {
  return gulp.src('./output-endinvestor/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./output-endinvestor'));
});


gulp.task('sass-flatsite', function () {
  return gulp.src('./output-flatsite/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./output-flatsite'));
});


gulp.task('sass-aws', function () {
  return gulp.src('./output-aws/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./output-aws'));
});

gulp.task('default', ['map']);
