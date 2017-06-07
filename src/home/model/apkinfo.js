'use strict';

import moment from 'moment';
moment.locale('zh-CN');
class Apkinfo extends think.model.base {

    init(...args) {
        super.init(...args);
        this.tableName = "T_APKINFO";
    }

    async getApkInfoByUserId(user_id, perPage, getPage) {
        let data = await this.alias('info')
            .distinct('info.id')
            .field('info.id as id, info.iconimg as logo, label, info.uploadtime as uploadtime')
            .join([{
                table: 'T_PROJECT',
                join: 'inner',
                as: 'project',
                on: ['info.id', 'apkinfoid']
            }])
            .where({ 'project.userid': user_id }).order('info.id DESC').page(getPage, perPage).countSelect();

        let res = await this.query("SELECT DISTINCT info.id FROM T_APKINFO AS info INNER JOIN `T_PROJECT` AS `project` ON info.id = `project`.`apkinfoid` WHERE ( project.userid = '" + user_id + "')");
        data.count = res.length;
        data.totalPages = Math.ceil(data.count / 9);
        data.data.forEach($ => {
            $.uploadtime = moment($.uploadtime, "YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD HH:mm:ss")
        });
        return data;
    }

    async getStaticInfoByApkinfoid(apkinfoid) {
        let data = await this.alias('info').field('info.*, components.*')
            .join([{
                table: 'T_APKSTATICANALYSISINFO',
                as: 'components',
                on: ['info.id', 'components.apkinfoid']
            }])
            .where({ "info.id": apkinfoid }).select();
        return data;

    }

}

export default Apkinfo;