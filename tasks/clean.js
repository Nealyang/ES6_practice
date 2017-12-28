/**
 *
 * @authors  Nealyang(nealyang231@gmail.com)
 * @date    2017/12/28
 * @version 1.0.0
 */
import gulp from 'gulp';
import del from 'del';
import args from './util/args';

gulp.task('clean',()=>{
    return del(['server/public','server/views'])
})