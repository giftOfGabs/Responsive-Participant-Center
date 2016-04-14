var gulp = require('gulp');
sass = require('gulp-ruby-sass'),
autoprefixer = require('gulp-autoprefixer'),
minifycss = require('gulp-minify-css'),
rename = require('gulp-rename');
scsslint = require('gulp-scss-lint');


gulp.task('styles', function() {
  return sass('sass/custom.scss', { style: 'expanded' })
  .pipe(gulp.dest('dist/styles'))
  .pipe(rename({suffix: '.min'}))
  .pipe(minifycss())
  .pipe(gulp.dest('dist/styles'));
});

gulp.task('watch', function() {
  gulp.watch('sass/**/*.*', ['styles']);
});

gulp.task('default',['watch'], function(){
 	gulp.start('styles');
});