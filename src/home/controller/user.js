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

    async loginAction(){
        if(this.isPost()) {
            if(this.post("type")==="login") {
                let name = this.post("username");
                let pass = this.post("password");
                let userModel = this.model("users");
                let res = await userModel.loginUser(name, pass);
                if (res) {
                    this.assign("success", true);
                    this.assign("user", res);
                } else {
                    this.assign("success", false);
                    this.assign("reason", "wrong password");
                }
                return this.display("login");
            }else{
                let name = this.get("username");
                let pass = this.get("password");
                let userModel = this.model("users");
                let res = await userModel.loginUser(name, pass);
                if (res) {
                    this.assign("success", true);
                    this.assign("user", res);
                } else {
                    this.assign("success", false);
                    this.assign("reason", "wrong password");
                }
                return this.display("login");
            }
        }else {
            return this.display("login");
        }
    }

}