'use strict';

class Permissions extends think.model.base {
    init (...args) {
        super.init(...args);
        this.tableName = "T_ANDROIDPERMISSIONS"
    }

    async getPermissionInfoByName(permName) {
        let data = await this.alias('permission')
            .field('name as permName, status, info, description')
            .where({"permission.name": permName}).select();
        return data;
    }
}

export default Permissions;