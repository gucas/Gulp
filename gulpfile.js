// Requis
var gulp = require('gulp');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

// VARIABLE
var sourcePath         = './Projet/src/';
var sourcePathCSS      =  sourcePath + './css/less/';

var destinationPath    = './Projet/build/';
var destinationPathCSS = destinationPath + './css/';
var destinationPathJS  = destinationPath + './JS/';


// STYLES
gulp.task('buildCSS', function () {
  return gulp.src(sourcePathCSS + '*.less')
    .pipe(plugins.less())
    .pipe(plugins.csscomb())
    .pipe(plugins.autoprefixer())
    .pipe(plugins.csso())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(destinationPathCSS));
});

// Tâche par défaut
gulp.task('default', ['buildCSS']);