/**
 * created by Zoolsher
 */
'use strict';

import Base from './base.js';
import fs from 'fs';
const uuidV4 = require('uuid/v4');
const pathOS = require('path');


const ALLOW_LIST = ["apk", "pdf"];

export default class extends Base {


  * createAction() {
    return this.display();
  }

  autoviewAction() {
    return this.display();
  }

  historyAction() {
    return this.display();
  }

  async getlistAction() {
    let projectModel = this.model('projects');
    let result = await projectModel.getProjectByUserID(this.user_id);
    console.log(result);
    return this.success(result);
  }

  async uploadAction() {
    let file = this.file('apk');
    let type = file.originalFilename.split('.').pop();
    let name = this.post("name");
    if (ALLOW_LIST.indexOf(type) >= 0) {
      let path = file.path;
      let newPath = pathOS.join(think.RESOURCE_PATH, 'upload', uuidV4() + "." + type);
      var that = this;
      try {
        fs.renameSync(path, newPath);
        let projectModel = that.model('projects');
        let insertID = await projectModel.addProject(name, newPath, this.user_id, 1);
        let sock = global.sock;
        sock.sendAction("new_project", {
          projectid: insertID,
          uid: this.user_id
        });
        let tokens = that.model('tokens');
        tokens.addTokens(insertID, this.user_id);
        return this.success({"id": insertID, "name": name});
      } catch (e) {
        this.fail("i do not know");
      }
    } else {
      return this.fail("wrong type");
    }
  }

  async gettokensAction() {
    let projectid = this.post('projectid');
    let userid = await this.session('user_id');
    let tokenModel = this.model('tokens');
    let tokens = await tokenModel.getTokens(projectid, userid);
    // let res = tokens.map($ => $.tokens.toArray());
    console.log(tokens);
    return this.success(tokens);
  }
}