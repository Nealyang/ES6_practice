/**
 *
 * @authors  Nealyang(nealyang231@gmail.com)
 * @date    2017/12/28
 * @version 1.0.0
 */
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));
