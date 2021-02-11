const { src, dest, parallel } = require('gulp');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const pug = require('gulp-pug');

function css() {
    return src('./src/styles/**/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(dest('build/styles'))
}

function html() {
    return src('./src/*.html')
    .pipe(dest('build'))
}

function viewJs() {
    return src('./src/js/**/*.js', { sourcemaps: true })
    .pipe(dest('build/js', { sourcemaps: true }))
}

function modelJs() {
    return src('./src/js/**/*.js', { sourcemaps: true })
    .pipe(dest('build/js/', { sourcemaps: true }))
}

function controllerJs() {
    return src('./src/js/**/*.js', { sourcemaps: true })
    .pipe(dest('build/js/', { sourcemaps: true }))
}

function js() {
    return src('./src/js/**/*.js', { sourcemaps: true })
    .pipe(dest('build/js', { sourcemaps: true }))
}

function images() {
    return src('src/images/**')
    .pipe(dest('build/images'))
}


exports.images = images;
exports.viewJs = viewJs;
exports.js = js;
exports.modelJs = modelJs;
exports.controllerJs = controllerJs;
exports.css = css;
exports.html = html;
exports.default = parallel(css,html,viewJs,modelJs,controllerJs,js,images);