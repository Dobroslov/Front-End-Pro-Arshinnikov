const { parallel, series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cssNano = require('gulp-cssnano');
const del = require('del');
const include = require('gulp-file-include');

function copyJs() {
  return src('src/js/**/*.js').pipe(concat('app.js')).pipe(dest('./dist'));
}

function copyJsMini() {
  return src('src/js/**/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(dest('./dist'));
}

function copyCss() {
  return src('src/sass/**/*.css').pipe(concat('app.css')).pipe(dest('./dist'));
}

function copyCssMini() {
  return src('src/sass/**/*.css')
    .pipe(concat('app.css'))
    .pipe(cssNano())
    .pipe(dest('./dist'));
}

function copyImgs() {
  return src('src/images/*.+(jpg|jpeg|png|gif|svg)')
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
      })
    )
    .pipe(dest('dist/images'));
}

function copyhtml() {
  return src('src/**.html')
    .pipe(
      include({
        prefix: '@@',
      })
    )
    .pipe(dest('./dist'));
}

function clear() {
  return del('dist');
}

module.exports = {
  build: series(clear, parallel(copyJs, copyCss, copyhtml, copyImgs)),
  minify: series(clear, parallel(copyJsMini, copyCssMini, copyhtml, copyImgs)),
};
