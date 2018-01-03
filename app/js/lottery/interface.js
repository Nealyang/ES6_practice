/**
 *
 * @authors  Nealyang(nealyang231@gmail.com)
 * @date    2018/1/3
 * @version 1.0.0
 */
import $ from 'jquery'
class Interface{
    /**
     * 获取遗漏数据
     * @param issue 当前期号
     */
    getOmit(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/omit',
                data:{
                    issue
                },
                dataType:'json',
                success:function (data) {
                    self.setOmit(data);
                    resolve.call(self,data)
                },
                error:function (err) {
                    reject.call(self,err)
                }
            })
        })
    }

    /**
     * 获取开奖号码
     * @param issue 期号
     */
    getOpenCode(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/opencode',
                data:{
                    issue
                },
                dataType:'json',
                success:function (data) {
                    self.setOpenCode(data);
                    resolve.call(self,data);
                },
                error:function (err) {
                    reject.call(self,err);
                }
            })
        })
    }

    /**
     * 获取当前状态
     * @param issue
     */
    getState(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/state',
                data:{
                    issue
                },
                dataType:'json',
                success:function (data) {
                    resolve.call(self,data);
                },
                error:function (err) {
                    reject.call(self,err);
                }
            })
        })
    }

    setOmit(data){
        new Error('需要手动实现');
    }

    setOpenCode(data){
        new Error('需要手动实现');
    }
}

export default Interface;