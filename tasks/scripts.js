/**
 *
 * @authors  Nealyang(nealyang231@gmail.com)
 * @date    2017/12/28
 * @version 1.0.0
 */
import gulp from 'gulp'
import gulpif from 'gulp-if'//gulp 语句中做if判断
import concat from 'gulp-concat'//文件拼接
import webpack from 'webpack'
import gulpWebpack from 'webpack-stream'//由于gulp处理的是流
import named from 'vinyl-named'//重命名做标志
import livereload from 'gulp-livereload'//热更新
import plumer from 'gulp-plumber'//处理文件信息流
import rename from 'gulp-rename'//重命名
import uglify from 'gulp-uglify'//压缩js
import {log, colors} from 'gulp-util'//工具
import args from './util/args'

gulp.task('scripts', () => {
    return gulp.src(['./app/js/index.js'])
        .pipe(plumer({
            errorHandler: function () {

            }
        }))
        .pipe(named())
        .pipe(gulpWebpack({
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        loader:'babel-loader'
                    }
                ]
            }
        }),null,(err,stats)=>{
            log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
                chunks:false
            }))
        })
        .pipe(gulp.dest('server/public/js'))
        .pipe(rename({
            basename:'cp',
            extname:'.min.js'
        }))
        .pipe(uglify({
            compress:{
                properties:false
            },
            output:{
                'quote_keys':true
            }
        }))
        .pipe(gulp.dest('server/public/js'))
        .pipe(gulpif(args.watch,livereload()));
});