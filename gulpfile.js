const gulp = require('gulp')
const prefix = require('gulp-autoprefixer')
const cmq = require('gulp-merge-media-queries')
const less = require('gulp-less')
const minifyCSS = require('gulp-cssnano')
const rename = require('gulp-rename')
const babel = require('gulp-babel')
const uglifyJS = require('gulp-uglify')

/* Less to CSS
==============================================================================*/

const cssSrcFile = 'style/style.less'
const cssDist = 'style/'

gulp.task('css', () => gulp.src(cssSrcFile)
    .pipe(less()).on('error', console.error.bind(console))
    .pipe(prefix())
    .pipe(cmq({
        log: false
    }))
    .pipe(minifyCSS())
    .pipe(rename({
        suffix: '.min',
    }))
    .pipe(gulp.dest(cssDist))
)

/* Minify JS
==============================================================================*/

const jsSrcFiles = [
    'js/page.js',
    'js/skill-list.js',
]
const jsDist = 'js/'

gulp.task('js', () => gulp.src(jsSrcFiles)
    .pipe(babel({
        presets: ['@babel/preset-env']
    }))
    .pipe(uglifyJS())
    .pipe(rename({
        suffix: '.min',
    }))
    .pipe(gulp.dest(jsDist)))

/* Watcher
==============================================================================*/

gulp.task('watch', () => {
    gulp.watch(cssSrcFile, gulp.series('css'))
    gulp.watch(jsSrcFiles, gulp.series('js'))
})
