const gulp      = require('gulp')
const prefix    = require('gulp-autoprefixer')
const cmq       = require('gulp-merge-media-queries')
const less      = require('gulp-less')
const minifyCSS = require('gulp-cssnano')
const rename    = require('gulp-rename')

/* Less to CSS
==============================================================================*/

const srcFile = 'style/style.less'
const cssDist = 'style/'

gulp.task('css', () => gulp.src(srcFile)
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

gulp.task('watch', () => {
    gulp.watch(srcFile, ['css'])
})
