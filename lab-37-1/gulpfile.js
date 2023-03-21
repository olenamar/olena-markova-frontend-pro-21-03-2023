import gulp from 'gulp';
import uglify from 'gulp-uglify';
import sass from 'sass';
import gulpSass from 'gulp-sass';

const scss = gulpSass(sass);

const SRC_DIR = './src/'
const DIST_DIR = './dist/'

const JS_DIR = SRC_DIR + 'js/**/*.js'
const SCSS_DIR = SRC_DIR + '/scss/**/*.scss'

async function def(){
    gulp.src(JS_DIR)
    .pipe(uglify())
    .pipe(gulp.dest(DIST_DIR))
}

async function sassCompl(){
    gulp.src(SCSS_DIR)
    .pipe(scss())
    .pipe(gulp.dest(DIST_DIR))
}

gulp.task('sass-compl', sassCompl)

gulp.task('default', def)
