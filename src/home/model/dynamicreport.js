'use strict';

class Dynamicreport extends think.model.base {
    init(...args) {
        super.init(...args);
        this.tableName = "T_REPORT";
    }

    async getDynamicInfoBySimId(sim) {
        let data = await this.alias('dynamicreport')
            .field('*')
            .where({ "dynamicreport.simulatorid": sim }).select();
        return data;
    }
    async getDynamicReportInfoViaId(id) {
        let data = await this.where({ 'id': id }).find();
        return data;
    }
}

export default Dynamicreport