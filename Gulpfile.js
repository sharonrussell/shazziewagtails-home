var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', done => {
     gulp.src('sass/**/*.scss')
         .pipe(sass().on('error', sass.logError))
         .pipe(gulp.dest('./css/'));
     done();
});

//Watch task
gulp.task('default',done => {
     gulp.watch('sass/**/*.scss',['styles']);
     done();
});