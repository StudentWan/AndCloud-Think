'use strict';

import moment from 'moment'
moment.locale('zh-CN')
class Projects extends think.model.base {
  init(...args) {
    super.init(...args);
    this.tableName = "T_PROJECT";
  }

  async addProject(projectName, filePath, userId, mirrid) {
    return await this.add({
      name: projectName,
      filename: filePath,
      userid: userId,
      mirrorid: mirrid,
      uploadtime: moment().format("YYYY-MM-DD HH:mm:ss"),
    });
  }

  async getProjectViaId(id) {
    let data = await this.where({"id": id}).find();
    return data;
  }

  async getProjectByUserID(user_id) {
    console.log(user_id);
    let data = await this.where({'userid': user_id}).select();
    data.forEach($ => {
      $.uploadtime = moment($.uploadtime, "YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD HH:mm:ss")
    });
    return data;
  }
}

export default Projects;