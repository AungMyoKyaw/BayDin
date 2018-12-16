var gulp = require('gulp');
var webpack = require('webpack');
var config = require('./webpack.config');
var babel = require('gulp-babel');
var mocha = require('gulp-mocha');

gulp.task('client', function() {
  return webpack(config).run(function(err, stats) {
    if (err) {
      console.log(err);
    } else {
      console.log(stats.toString());
    }
  });
});

gulp.task('node', function() {
  return gulp
    .src('baydinjs/**')
    .pipe(
      babel({
        presets: ['env']
      })
    )
    .pipe(gulp.dest('dist/node'));
});

gulp.task('test', function() {
  return gulp
    .src('test/**')
    .pipe(mocha())
    .once('error', function() {
      process.exit(1);
    })
    .once('end', function() {
      process.exit();
    });
});

gulp.task('default', ['node', 'client', 'test']);
