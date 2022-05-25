const {src, dest} = require('gulp');
const concat = require('gulp-concat');
const gulp = require('gulp');

//the 'output' folder will be created in the case of exist of html files and css files

function createTask1() {
    return src('./src/**/*.js')
        .pipe(concat('result.js'))
        .pipe(dest('output/'));
}

function createTask2() {
    return src('./src/**/*.css')
        .pipe(concat('result.css'))
        .pipe(dest('output/'));
}

const tasksSet = gulp.series(createTask1, createTask2);
exports.default = tasksSet;
