const gulp = require("gulp");
const babel = require("gulp-babel");
const mocha = require("gulp-mocha");
const webpack = require("webpack-stream");
const path = require("path");
const webpackConfig = require("./webpack.config.js");

gulp.task("build-node", () =>
  gulp
    .src("src/**/*.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"]
      })
    )
    .pipe(gulp.dest("dist/node"))
);

gulp.task("build-browser", () =>
  gulp
    .src("src/**/*.js")
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest("dist/client"))
);

gulp.task("test", () => gulp.src("test/**/*.js").pipe(mocha()));

gulp.task("build", gulp.parallel("build-node", "build-browser"));

gulp.task("default", gulp.series("build", "test"));
