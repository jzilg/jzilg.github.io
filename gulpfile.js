const gulp = require('gulp')
const prefix = require('gulp-autoprefixer')
const cmq = require('gulp-merge-media-queries')
const less = require('gulp-less')
const concat = require('gulp-concat')
const minifyCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const babel = require('gulp-babel')
const uglifyJS = require('gulp-uglify')

/* Less to CSS
==============================================================================*/

const cssSrcFiles = 'src/style/*.less'
const cssDist = 'assets/css/'

gulp.task('css', () => gulp.src(cssSrcFiles)
    .pipe(less()).on('error', console.error.bind(console))
    .pipe(prefix())
    .pipe(cmq({
        log: false
    }))
    .pipe(concat('style.css'))
    .pipe(minifyCSS())
    .pipe(rename({
        suffix: '.min',
    }))
    .pipe(gulp.dest(cssDist))
)

/* Minify JS
==============================================================================*/

const jsSrcFiles = 'src/js/*.js'
const jsDist = 'assets/js/'

gulp.task('js', () => gulp.src(jsSrcFiles)
    .pipe(babel({
        presets: ['@babel/preset-env']
    }))
    .pipe(uglifyJS())
    .pipe(rename({
        suffix: '.min',
    }))
    .pipe(gulp.dest(jsDist))
)

/* Watcher
==============================================================================*/

gulp.task('watch', () => {
    gulp.watch(cssSrcFiles, gulp.series('css'))
    gulp.watch(jsSrcFiles, gulp.series('js'))
})
