const gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  haml = require('gulp-haml');
  sass = require('gulp-sass'),
  uglify = require('gulp-uglify'),
  path = {},
  sassTasks = ['sass'],
  jsTasks = ['js'],
  hamlTasks = ['haml'];

path = {
  html: './public',
  css: './css',
  js: './js/build',
}
path.watch = {
  sass: ['./sass/**/*.scss'],
  haml: ['./haml/**/*.haml'],
  js: ['./js/source/**/*.js'],
}

gulp.task('sass', () => {
  gulp.src(path.watch.sass)
  .pipe(sass({
    outputStyle: 'compressed',
  }))
  .pipe(autoprefixer({
    versions: ['last 5 browsers']
  }))
  .pipe(gulp.dest(path.css));
});

gulp.task('js', () => {
  gulp.src(path.watch.js)
  .pipe(concat('todo.js'))
  .pipe(uglify())
  .pipe(gulp.dest(path.js));
});

gulp.task('haml', () => {
  gulp.src(path.watch.haml)
  .pipe(haml())
  .pipe(gulp.dest(path.html));
});

gulp.task('default', () => {
  gulp.start('sass');
  gulp.start('js');
  gulp.start('haml');
  gulp.watch(path.watch.sass, sassTasks);
  gulp.watch(path.watch.js, jsTasks);
  gulp.watch(path.watch.haml, hamlTasks);
})
