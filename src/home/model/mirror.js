'use strict';

export default class extends think.model.base {
    init(...args) {
        super.init(...args);
        this.tableName = "T_MIRRORIMAGE";
    }
    getMirrorList() {
        return this.where(1).select();
    }
    async getMirrorViaId(id) {
        let data = await this.where({ 'id': id }).find();
        return data;
    }
}