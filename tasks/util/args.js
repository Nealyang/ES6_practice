/**
 *
 * @authors  Nealyang(nealyang231@gmail.com)
 * @date    2017/12/28
 * @version 1.0.0
 */
import yargs from 'yargs'

const args = yargs

    .option('production',{
        boolean:true,
        default:false,
        description:'min all scripts'
    })

    .option('watch',{
        boolean:true,
        default:false,
        description:'watch all files'
    })

    .option('verbose',{
        boolean:true,
        default:false,
        description:'log'
    })

    .option('port',{
        string:true,
        default:9999,
        description:'server port'
    })

    .option('sourcemaps',{
        description:'force the creation of  sourcemaps'
    })

    .argv;