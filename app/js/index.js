/**
 *
 * @authors  Nealyang(nealyang231@gmail.com)
 * @date    2017/12/28
 * @version 1.0.0
 */
import 'babel-polyfill'
import './class/test'
class Test {
    constructor(){
        this.a = 'hello world'
    }
}

let test = new Test();
document.body.innerHTML = test.a;

