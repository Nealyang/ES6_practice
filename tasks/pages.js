/**
 *
 * @authors  Nealyang(nealyang231@gmail.com)
 * @date    2017/12/28
 * @version 1.0.0
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages',()=>{
    return gulp.src('app/**/*.ejs')
        .pipe(gulp.dest('server'))
        .pipe(gulpif(args.watch,livereload()))
});