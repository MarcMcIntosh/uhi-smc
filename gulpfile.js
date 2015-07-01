var slice = [].slice,
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    livereload = require('gulp-livereload'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    gwebpack = require('gulp-webpack'),
    less = require('gulp-less'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer-core'),
    rimraf = require('rimraf'),
    ghPages = require('gulp-gh-pages'),
    src_path = "src",
    components_path = "bower_components",
    modules_path = "node_modules",
    dist_path = "dist";


var err = function() {
  var x = 1 <= arguments.length ? slice.call(arguments, 0) : [];
  gutil.log.apply(gutil, x);
  return gutil.beep.apply(gutil, x);
};

var webpack = function(name, ext, watch) {
  var options = {
    watch: watch,
    cache: true,
    devtool: "source-map",
    output: {
      filename: name + ".js",
      sourceMapFilename: "[file].map"
    },
    resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx", ".coffee", ".cjsx"],
      modulesDirectories: [components_path, modules_path]
    },
    module: {
      loaders: [
        {
          test: [/\.js$/, /\.jsx$/],
          exclude: [new RegExp(modules_path), new RegExp(components_path)],
          loader: "babel-loader"
        }
      ]
    }
  };
  return gulp.src(src_path + "/" + name + "." + ext).pipe(gwebpack(options)).pipe(gulp.dest(dist_path));
};

var js = function(watch) {
  return webpack("app", "jsx", watch);
};

gulp.task('js', function() {
  return js(false);
});

gulp.task('js-dev', function() {
  return js(true);
});

gulp.task('css', function() {
  return gulp.src(src_path + "/styles.less").pipe(plumber()).pipe(less({
    paths: [components_path, modules_path]
  })).on('error', err).pipe(postcss([
    autoprefixer({
      browsers: ["last 2 versions", "ie 8", "ie 9"]
    })
  ])).pipe(gulp.dest(dist_path));
});

gulp.task('clean', function() {
  return rimraf.sync(dist_path);
});

gulp.task('copy', function() {
  gulp.src(src_path + "/*.html").pipe(gulp.dest(dist_path));
  gulp.src(src_path + "/favicon.ico").pipe(gulp.dest(dist_path));
});

gulp.task('build', ['clean', 'copy', 'css', 'js']);

server_main = src_path + "/server.js";

gulp.task('server', function() {
  return nodemon({
    script: server_main,
    watch: [server_main],
    env: {
      PORT: process.env.PORT || 3000
    }
  });
});

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('default', ['clean', 'copy', 'css', 'server', 'js-dev', 'watch']);

gulp.task('watch', ['copy'], function() {
  livereload.listen();
  gulp.watch([dist_path + "/**/*"]).on('change', livereload.changed);
  gulp.watch([src_path + "/**/*.less"], ['css']);
  return gulp.watch([src_path + "/**/*.html"], ['copy']);
});