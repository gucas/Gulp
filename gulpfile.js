
// === STATER =====================
// ================================
// ================================
var gulp = require('gulp');
// ================================
// ================================
// ================================



// === LOAD ALL PACKAGE.JSON PLUGIN
// ================================
// ================================
var plugins = require('gulp-load-plugins')();
// ================================
// ================================
// ================================



// === VARIABLE ===================
// ================================
// ================================
var sourcePath         = './Projet/src/';
var sourcePathCSS      =  sourcePath + './css/less/';
var sourcePathJS       =  sourcePath + './js/';
var sourcePathImg      =  sourcePath + './img/';

var destinationPath    = './Projet/build/';
var destinationPathCSS = destinationPath + './css/';
var destinationPathJS  = destinationPath + './js/';
var destinationPathImg = destinationPath + './img/';
// ================================
// ================================
// ================================


// const imagemin = require('gulp-imagemin');
// const pngquant = require('imagemin-pngquant');

// === STYLES =====================
// ================================
// ================================
gulp.task('buildCSS', function () {
    return gulp.src(sourcePathCSS + '*.less')
        // Prevent pipe breaking caused by errors from gulp plugins.
        .pipe(plugins.plumber(onError))

        .pipe(plugins.sourcemaps.init())

        // Compile LESS file.
        .pipe(plugins.less())

        // Makes your code beautiful.
        .pipe(plugins.csscomb())
        .pipe(plugins.cssbeautify())

        // Remove unused CSS.
        .pipe(plugins.uncss({
            html: [sourcePath + '*.html']
        }))

        // Parse CSS and add vendor prefixes.
        .pipe(plugins.autoprefixer())

        // CSS minimizer unlike others.
        .pipe(plugins.csso())


        .pipe(plugins..sourcemaps.write(destinationPathCSS.maps))


        .pipe(plugins.rename({
            suffix: '.min'
        }))
    .pipe(gulp.dest(destinationPathCSS));
});
// ================================
// ================================
// ================================


// Tâche "critical" = critical inline CSS
gulp.task('prodCSS', function() {
    return  gulp.src(sourcePath + '*.html')

    // Extracts & inlines critical-path (above-the-fold) CSS from HTML
    .pipe(plugins.critical({
        base   : prod,
        inline : true,
        width  : 320,
        height : 480,
        minify : true
    }))
    .pipe(gulp.dest(destinationPath));
});
// ================================
// ================================
// ================================



// === HTML ======================
// ================================
// ================================
gulp.task('mini', function() {
  return gulp.src(sourcePath + '*.html')
    .pipe(plugins.htmlmin({
        removeComments              : true,
        collapseWhitespace          : true,
        conservativeCollapse        : true,
        collapseInlineTagWhitespace : true,
        removeEmptyAttributes       : true,
    }))
    .pipe(gulp.dest(destinationPath))
});
// ================================
// ================================
// ================================



// === SCRIPT =====================
// ================================
// ================================
gulp.task('buildJS', function() {
  return gulp.src(sourcePathJS + '*.js')
    .pipe(plugins.uglify())
    .pipe(plugins.concat('script.min.js'))
    .pipe(gulp.dest(destinationPathJS));
});
// ================================
// ================================
// ================================



// === IMAGES OPTIMISATION ========
// ================================
// ================================
gulp.task('optimImg', function () {
    return gulp.src(sourcePathImg + '*.{png,jpg,jpeg,gif,svg}')
        .pipe(plugins.imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [plugins.imagemin-pngquant()]
        }))
        .pipe(gulp.dest(destinationPathImg));
});
// ================================
// ================================
// ================================






// === MAIN TASK LAUNCHER =========
// ================================
// ================================
// === WATCH ======================
// ================================
gulp.task('watch', function () {
    gulp.watch(sourcePathCSS + '*.less', ['css']);
    gulp.watch(sourcePath + '*.html', ['html']);
});
// ================================
// === PREPROD ====================
// ================================
gulp.task('default', ['buildCSS']);
// ================================
// === PROD =======================
// ================================
gulp.task('default', ['buildCSS']);
// ================================
// ================================
// ================================