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
    .pipe(gulp.dest('./output'));
});

gulp.task('fonts', function(){
  gulp.src(['./input-icomoon/fonts/*'])
    .pipe(gulp.dest('./output/fonts'));
});

gulp.task('sass', function () {
  return gulp.src('./output/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./output'));
});



gulp.task('default', ['map', 'fonts']);
