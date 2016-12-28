'use strict';
import UUID from 'uuid';
class Tokens extends think.model.base {
  init(...args) {
    super.init(...args);
    this.tableName = "T_TOKEN";
  }

  addTokens(projectid, userid) {
    var promiseList = [];
    promiseList.push(
      this.add({
        projectid: projectid,
        type: 0,
        token: UUID.v4(),
        userid: userid
      })
    );
    promiseList.push(
      this.add({
        projectid: projectid,
        type: 1,
        token: UUID.v4(),
        userid: userid
      })
    );
    return Promise.all(promiseList);
  }
}

export default Tokens;