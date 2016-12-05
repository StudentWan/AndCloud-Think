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

    async indexAction() {
        let user_id = await this.session("user_id");
        if (user_id !== null) {
            this.assign(user_id);
        }
        return this.display();
    }

    async loginAction() {
        if (this.isPost()) {
            if (this.post("type") == "login") {
                let name = this.post("username");
                let pass = this.post("password");
                let userModel = this.model("users");
                let res = await userModel.loginUser(name, pass);
                let retJson = {};
                if (res) {
                    retJson.success = true;
                    await this.session("user_id", res.getId());
                } else {
                    retJson.success = false;
                    retJson.reason = 'wrong password';
                }
                return this.fail(retJson.reason);
            } else {
                let name = this.get("username");
                let pass = this.get("password");
                let userModel = this.model("users");
                let res = await userModel.addUser(name, pass);
                if (res) {
                    this.assign("success", true);
                    this.assign("user", res);
                } else {
                    this.assign("success", false);
                    this.assign("reason", "wrong password");
                }
                return this.success(this.post());
            }
        } else {
            return this.display("login");
        }
    }

}