/**
 * @fileoverview Gulp build configuration for BayDinJS
 * @description Build tasks for Node.js and browser distributions
 */

var gulp = require("gulp");
var babel = require("gulp-babel");
var mocha = require("gulp-mocha");
var webpack = require("webpack-stream");
var path = require("path");
var webpackConfig = require("./webpack.config.js");

/**
 * Build task for Node.js distribution
 * Transpiles source files using Babel for Node.js compatibility
 * @task build-node
 */
gulp.task("build-node", function() {
  return gulp
    .src("src/**/*.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"]
      })
    )
    .pipe(gulp.dest("dist/node"));
});

/**
 * Build task for browser distribution
 * Bundles and minifies source files using Webpack
 * @task build-browser
 */
gulp.task("build-browser", function() {
  return gulp
    .src("src/**/*.js")
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest("dist/client"));
});

/**
 * Test task
 * Runs all tests using Mocha
 * @task test
 */
gulp.task("test", function() {
  return gulp.src("test/**/*.js").pipe(mocha());
});

/**
 * Combined build task
 * Runs both Node.js and browser builds in parallel
 * @task build
 */
gulp.task("build", gulp.parallel("build-node", "build-browser"));

/**
 * Default task
 * Runs build and then tests
 * @task default
 */
gulp.task("default", gulp.series("build", "test"));
