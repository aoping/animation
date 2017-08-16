import gulp from 'gulp'
import gulpif from 'gulp-if'
import liveload from 'gulp-livereload'
import args from './util/args'

gulp.tast('css', () => {
    return gulp.src('app/**/*.css')
        .pipe(gulp.dest('server/public'))
        // .pipe(gulpif(args.watch, livereload()))
})