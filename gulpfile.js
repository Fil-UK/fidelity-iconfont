// gulpfile.js
var gulp = require('gulp');
var replace = require('gulp-replace');
var insert = require('gulp-insert');
var rename = require('gulp-rename');
var sass = require('gulp-sass');


gulp.task('map', function(){
  gulp.src(['variables.scss'])
    .pipe(replace('$icomoon-font-path: "fonts" !default;', '$icons-def: ('))
    .pipe(replace('$icon-', '    '))
    .pipe(replace(';', ','))
    .pipe(insert.append(');'))
    .pipe(rename("_icon-map.scss"))
    .pipe(gulp.dest('./'));
});


gulp.task('sass-ie', function () {
  return gulp.src('./ei-icons.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
});


gulp.task('sass-flatsite', function () {
  return gulp.src('./flatsite-icons.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
});


gulp.task('default', ['map', 'sass-ie', 'sass-flatsite']);
