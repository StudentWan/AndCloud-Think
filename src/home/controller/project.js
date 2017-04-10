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


    async createAction() {
        let mirrorModel = this.model('mirror');
        let res = await mirrorModel.getMirrorList();
        this.assign('mirrorlist', res);
        return this.display();
    }

    async historyAction() {
        let mirrorModel = this.model('mirror');
        let res = await mirrorModel.getMirrorList();
        this.assign('mirrorlist', res);
        return this.display();
    }

    async getlistAction() {
        let projectModel = this.model('projects');
        let result = await projectModel.getProjectByUserID(this.user_id);
        return this.success(result);
    }

    async apkinfoAction() {
        let projId = this.get("proj");
        let projectModel = this.model('projects');
        let result = await projectModel.getApkInfoByProjectIdAndUserId(projId, this.user_id);
        return this.success(result);
    }

    async staticinfoAction() {
        let projId = this.get("proj");
        let projectModel = this.model('projects');
        let result = await projectModel.getStaticInfoByProjectIdAndUserId(projId, this.user_id);
        return this.success(result);
    }

    async dynamicinfoAction() {
        let sim = this.get("sim");
        let dynamicModel = this.model("dynamicreport");
        let result = await dynamicModel.getDynamicInfoBySimId(sim);
        return this.success(result);
    }

    async uploadAction() {
        let file = this.file('apk');
        let vm = this.post("vm");
        let time = this.post("time");
        let ext = file.originalFilename.split('.').pop();
        let name = this.post("name");
        if (ALLOW_LIST.indexOf(ext) >= 0) {
            let path = file.path;
            let newPath = pathOS.join(think.RESOURCE_PATH, 'upload', uuidV4() + "." + ext);
            var that = this;
            try {
                fs.renameSync(path, newPath);
                let projectModel = that.model('projects');
                let insertID = await projectModel.addProject(name, newPath, this.user_id, vm);
                let sock = global.sock;
                sock.sendAction("new_project", {
                    projectid: insertID,
                    uid: this.user_id,
                    time: time,
                    vm: vm
                });
                let tokens = that.model('tokens');
                tokens.addTokens(insertID, this.user_id, vm, 0);
                return this.success({"id": insertID, "name": name});
            } catch (e) {
                this.fail("i do not know");
            }
        } else {
            return this.fail("wrong type");
        }
    }

    async uploadhandfulAction() {
        let vm = this.post("vm");
        let projectid = this.post("projectid");
        let type = this.post("type");
        let userid = await this.session('user_id');
        let time = this.post("time");
        let tokenModel = this.model('tokens');
        tokenModel.addTokens(projectid, userid, vm, type);
        let sock = global.sock;
        sock.sendAction("not_new_project", {
            projectid: projectid,
            uid: userid,
            time: time,
            vm: vm,
            type: type
        });
        return this.success();
    }

    async gettokensAction() {
        let projectid = this.post('projectid');
        let userid = await this.session('user_id');
        let tokenModel = this.model('tokens');
        let tokens = await tokenModel.getTokens(projectid, userid);
        // let res = tokens.map($ => $.tokens.toArray());
        return this.success(tokens);
    }

    async getlifecycleAction() {
        let projectid = this.get('projectid');
        let type = this.get('type');
        let deviceMapModel = this.model('devicemaps');
        let deviceMap = await deviceMapModel.getDeviceMap(projectid, type);
        let simulatorModel = this.model('simulators');
        let result = await simulatorModel.getSimulator(deviceMap[0].deviceid);
        return this.success(result);
    }
}