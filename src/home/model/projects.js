'use strict';

import moment from 'moment';
moment.locale('zh-CN');
class Projects extends think.model.base {
    init(...args) {
        super.init(...args);
        this.tableName = "T_PROJECT";
    }

    async addProject(projectName, filePath, userId, mirrid) {
        return await this.add({
            name: projectName,
            filename: filePath,
            userid: userId,
            mirrorid: mirrid,
            uploadtime: moment().format("YYYY-MM-DD HH:mm:ss"),
        });
    }

    async getProjectViaId(id) {
        let data = await this.where({ "id": id }).find();
        return data;
    }


    async getProjectByUserID(user_id, perPage, getPage) {
        let data = await this.alias('project')
            .field('project.id as id, name, project.uploadtime as uploadtime, info.iconimg as logo, label, info.id as infoid')
            .join([{
                table: 'T_APKINFO',
                as: 'info',
                on: ['apkinfoid', 'info.id']
            }])
            .where({ 'userid': user_id }).order('id DESC').page(getPage, perPage).countSelect();
        console.log(data);
        data.data.forEach($ => {
            $.uploadtime = moment($.uploadtime, "YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD HH:mm:ss")
        });
        return data;
    }


    async getApkInfoByProjectIdAndUserId(proj_id, user_id) {
        let data = await this.alias('project')
            .field('project.uploadtime as uploadtime, info.iconimg as logo, info.*')
            .join([{
                table: 'T_APKINFO',
                as: 'info',
                on: ['apkinfoid', 'info.id']
            }])
            .where({ "project.id": proj_id, "project.userid": user_id }).select();
        return data;
    }

    async getStaticInfoByProjectIdAndUserId(proj_id, user_id) {
        let data = await this.alias('static')
            .field('fileappinfo.*, components.*')
            .join([{
                table: 'T_APKINFO',
                as: 'fileappinfo',
                on: ['apkinfoid', 'fileappinfo.id']
            }])
            .join([{
                table: 'T_APKSTATICANALYSISINFO',
                as: 'components',
                on: ['apkinfoid', 'components.apkinfoid']
            }])
            .where({ "static.id": proj_id, "static.userid": user_id }).select();
        return data;
    }
}

export default Projects;