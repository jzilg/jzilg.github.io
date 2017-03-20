const gulp      = require('gulp'),
      prefix    = require('gulp-autoprefixer'),
      cmq       = require('gulp-merge-media-queries'),
      concat    = require('gulp-concat'),
      less      = require('gulp-less'),
      minifyCSS = require('gulp-cssnano'),
      rename    = require('gulp-rename');

/* Less to CSS
==============================================================================*/

const cssDest  = 'style/css/';
const lessDest = 'style/less/';
const srcFile = lessDest + 'style.less';

gulp.task('css', function() {
    return gulp.src(srcFile)
        .pipe(less()).on('error', console.error.bind(console))
        .pipe(prefix({
            browsers: [
                'last 2 versions',
                'last 2 Android versions',
                'last 2 ChromeAndroid versions',
                'last 2 FirefoxAndroid versions',
                'last 2 iOS versions',
                '> 5% in DE',
                'ie >= 10'
            ]
        }))
        .pipe(cmq({
            log: false
        }))
        .pipe(gulp.dest(cssDest));
});