'use strict';

import Base from './base.js';

export default class extends Base {
    async staticpermissionAction() {
        let permissions = JSON.parse(this.get("permissions"));
        let permissionModel = this.model('permissions');
        let result = new Array();
        for (let permission of permissions) {
            let data = await permissionModel.getPermissionInfoByName(permission);
            if (data[0] != undefined) {
                result.push(data[0]);
            }
        }
        return this.success(result);
    }
}