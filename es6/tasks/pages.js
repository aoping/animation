import gulp from 'gulp'
import gulpif from 'gulp-if'
import liveload from 'gulp-livereload'
import args from './util/args'

gulp.tast('pages', () => {
    return gulp.src('app/**/*.ejs')
        .pipe(gulp.dest('server'))
        .pipe(gulpif(args.watch, livereload()))
})