const gulp = require ('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
var browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')

function styles() {
    return gulp.src('src/sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(autoprefixer({
            cascade: false
    }))
    .pipe(cleanCSS({
        level: 2
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}

function scripts() {
    return gulp.src('/src/js/**/*.js')
    .pipe(concat('js/main.js'))
    .pipe(uglify({
        toplevel: true
    }))
    .pipe(gulp.dest('/js'))
    .pipe(browserSync.stream());
}
function clean() {
    return del(['src/css/**/*.css'])
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
    gulp.watch('src/sass/**/*.scss', styles);
    gulp.watch('src/js/**/*.js', scripts);
    gulp.watch("src/*.html").on('change', browserSync.reload);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('clean', clean);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, gulp.parallel(scripts, styles)));
gulp.task('dev', gulp.series('build', 'watch'))
