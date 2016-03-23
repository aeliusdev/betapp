var gulp = require("gulp");
var sass = require("gulp-sass");
var webpack = require("webpack");

gulp.task("webpack", function (done) 
{
  webpack(require('./webpack.config.js') ).run(function(err, stats) {
    if(err) {
      console.log('Error', err);
    }
    else {
      console.log(stats.toString());
    }
    done();
  });
});

gulp.task("default", function () 
{
	gulp.watch("./public/assets/**/*", ["webpack"]);
});