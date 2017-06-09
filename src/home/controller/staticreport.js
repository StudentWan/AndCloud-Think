'use strict';

import Base from './base.js';
import conifg from '../../common/config/config.js';

export default class extends Base {
    indexAction() {
        this.assign("id", this.get("apkinfoid"));
        return this.display("staticreport");
    }
    async downloadAction() {
        let apkinfoid = this.get('apkinfoid');
        let apkinfoModel = this.model('apkinfo');
        let reportid = await apkinfoModel.getReportIdByApkinfoid(apkinfoid);
        let reportUrl = this.config('workspace') + new String(reportid[0].identify) + '/report.pdf';
        return this.download(reportUrl);

    }
}