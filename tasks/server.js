/**
 *
 * @authors  Nealyang(nealyang231@gmail.com)
 * @date    2017/12/28
 * @version 1.0.0
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve',(cb)=>{
    if(!args.watch) return cb();

    var server = liveserver.new(['--harmony','server/bin/www']);
    server.start();

    gulp.watch(['server/public/**/*.js','server/views/**/*.ejs','server/views/**/*.css'],function(file){
        server.notify.apply(server,[file]);
    });

    gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
        server.start.bind(server)()
    });
});