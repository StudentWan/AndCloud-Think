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
    this.assign("user", this.user);
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
          await this.session("user_id", res['id'].toString());
          return this.success(res["id"].toString());
        } else {
          retJson.success = false;
          retJson.reason = 'wrong password';
          return this.fail(retJson.reason);
        }

      } else {
        let name_re = this.post("username");
        let pass = this.post("password");
        let userModel = this.model("users");
        let isExist = await userModel.isUserNameExist(name_re);
        if (isExist) {
          return this.fail('name already exists');
        }
        let res = await userModel.addUser(name_re, pass);
        if (res) {
          await this.session("user_id", res);
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