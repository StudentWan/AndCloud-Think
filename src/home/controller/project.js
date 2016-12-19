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
                let insertID = await projectModel.addProject(name, newPath, this.user_id);
                let sock = global.sock;
                sock.sendAction("test", {
                    projectId: insertID
                });
                return this.success({"id": insertID, "name": name});
            } catch (e) {
                this.fail("i do not know");
            }
        } else {
            return this.fail("wrong type");
        }
    }
}