const gulp = require('gulp'); // gulp
const sass = require('gulp-sass'); // sass
const autoprefixer = require('gulp-autoprefixer');
const postcss = require('gulp-postcss'); // postcss
const cssnext=  require('postcss-cssnext'); // process custom variables
const mqpacker = require('css-mqpacker'); // consolidate media query
const cssnano = require('cssnano'); // minify css
const concat = require('gulp-concat'); // concatenate js
const uglify = require('gulp-uglify'); // minify js
const imagemin = require('gulp-imagemin'); // minify images

/*
Top Level Functions

gulp.task - define tasks
gulp.src - point to files to use
gulp.dest - points to folder to output
gulp.watch - watch files and folders for changes
*/

// Process CSS
gulp.task('css', function () {
  console.log('gulp css started')
  var plugins = [
    cssnext({ browsers: ["last 2 versions"] }),
    // cssnext({ features: {
    //             autoprefixer: false
    //           }
    //         }),
    mqpacker(),
    cssnano({ autoprefixer: false })
  ];
  return gulp.src('styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    // .pipe(autoprefixer({ grid: true, browsers: ["last 2 major versions", "not ie < 11"] }))
    .pipe(gulp.dest('../static/assets/css'))
});

// Concatenate & Minify JS
gulp.task('js', function () {
  console.log('gulp js started')
  return gulp.src(['vendors/jquery/jquery-3.3.1.min.js',
                   'vendors/parsley/parsley.min.js',
                   'vendors/headroom/headroom.min.js',
                   'vendors/imagesloaded/imagesloaded.pkgd.min.js',
                   'vendors/iziModal/js/iziModal.min.js',
                   'vendors/slick/slick.min.js',
                   'vendors/stickr/jquery.stickr.min.js',
                   'vendors/prism/prism.js',
                   'vendors/scrollreveal/scrollreveal.min.js',
                   'vendors/typed/typed.min.js',
                   'scripts/components/tab.js',
                   'scripts/components/accordion.js',
                   'scripts/components/dropdown.js',
                   'scripts/components/slidemenu.js',
                   'scripts/components/notice.js',
                   'scripts/main.js'])
		.pipe(concat('main.js'))
		.pipe(gulp.dest('../static/assets/js'))
});

// Watch
gulp.task('watch', ['default'], function () {
  gulp.watch(['styles/**/*.*'], ['css'])
  gulp.watch(['scripts/**/*.*'], ['js'])
  gulp.watch(['vendor/**/*.*'], ['js'])
});

gulp.task('default', ['css', 'js']);
