'use strict';

class DeviceMaps extends think.model.base {
  init(...args) {
    super.init(...args);
    this.tableName = "T_DEVICEMAP";
  }

  addDeviceMap(project_id) {
    let promiseArr = [];
    promiseArr.push(
      this.add({
        projectid: project_id,
        type: 0,
      })
    );
    promiseArr.push(
      this.add({
        projectid: project_id,
        type: 1,
      })
    );
    return Promise.all(promiseArr)
  }

  async getDeviceMap(projectid, type) {
      let data = await this.where({'projectid': projectid, 'type': type}).select();
      return data;
  }
}

export default DeviceMaps;