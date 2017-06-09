'use strict';


class DynamicInfo extends think.model.base {
    init(...args) {
        super.init(...args);
        this.tableName = "T_DYNAMICANALYSISINFO";
    }
    async getScreenShotsByDeviceid(deviceid) {
        let data = await this.alias('dynamicinfo')
            .field('dynamicinfo.timerscreenshots as screenShotsPath, sim.name as basePath')
            .join([{
                table: 'T_SIMULATORDOMAIN',
                as: 'sim',
                on: ['dynamicinfo.deviceid', 'id']
            }])
            .where({ 'dynamicinfo.deviceid': deviceid }).select();
        return data;
    }
}

export default DynamicInfo;