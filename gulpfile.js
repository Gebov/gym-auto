var gulp = require("gulp");
// var ts = require("gulp-typescript");
// var tsProject = ts.createProject("tsconfig.json");

// gulp.task("default", function () {
//     return tsProject.src()
//         .pipe(tsProject())
//         .js.pipe(gulp.dest('dist'));
// });

var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config')
gulp.task('default', function() {
  return gulp.src('')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist/'));
});