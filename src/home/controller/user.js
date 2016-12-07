/**
 * Created by zoolsher on 2016/11/22.
 */
'use strict';

import Base from './base.js';
import util from 'util';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */

    // async __before(){
    //     if(this.http.action !== "login"){
    //         this.user_id = await this.session('user_id');
    //         if(!think.isEmpty(this.user_id)){
    //             let userModel = this.model("users");
    //             this.user = await userModel.getUserViaId(this.user_id);
    //         }else{
    //             return this.redirect('login');
    //         }
    //     }
    // }

    async indexAction() {
        this.assign("user",this.user);
        return this.display();
    }

    * loginAction() {
        if (this.isPost()) {
            if (this.post("type") == "login") {
                let name = this.post("username");
                let pass = this.post("password");
                let userModel = this.model("users");
                let res = yield userModel.loginUser(name, pass);
                let retJson = {};
                if (res) {
                    retJson.success = true;
                    yield this.session("user_id", res['_id'].toString());
                    return this.success(res["_id"].toString());
                } else {
                    retJson.success = false;
                    retJson.reason = 'wrong password';
                    return this.fail(retJson.reason);
                }

            } else {
                let name_re = this.post("username");
                let pass = this.post("password");
                let userModel = this.model("users");
                let isExist = yield userModel.isUserNameExist(name_re);
                if(isExist){
                    return this.fail('name already exists');
                }
                let res = yield userModel.addUser(name_re, pass);
                if (res) {
                    yield this.session("user_id", res);
                    return this.success('');
                } else {
                    return this.fail('unknown reason');
                }
            }
        } else {
            return this.display("login");
        }
    }

}