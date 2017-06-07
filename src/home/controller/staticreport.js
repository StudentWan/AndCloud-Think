'use strict';

import Base from './base.js';

export default class extends Base {
    indexAction() {
        this.assign("id", this.get("apkinfoid"));
        return this.display("staticreport");
    }
}