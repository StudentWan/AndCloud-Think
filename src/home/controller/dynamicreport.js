'use strict';

import Base from './base.js';

export default class extends Base {
    indexAction() {
        let dynamicid = this.get('dynamicid');
        let staticid = this.get('staticid');
        let projectid = this.get('projectid');
        let autoinfo;
        if (this.get('auto') == 0) {
            autoinfo = "手动";
        } else {
            autoinfo = "自动";
        }

        this.assign("dynamicReport", { static: staticid, dynamic: dynamicid, autoinfo: autoinfo, projectid: projectid });
        return this.display("dynamicreport");
    }
}