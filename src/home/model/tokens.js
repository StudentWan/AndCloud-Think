'use strict';
import UUID from 'uuid';
class Tokens extends think.model.base {
    init(...args) {
        super.init(...args);
        this.tableName = "T_TOKEN";
    }

    async addTokens(projectid, userid, vm, type) {
        let promiseList = [];
        promiseList.push(
            this.add({
                projectid: projectid,
                type: type,
                token: UUID.v4(),
                userid: userid,
                imageid: vm
            })
        );

        return Promise.all(promiseList);
    }

    async getTokens(projectid, userid) {
        return await this.where({
            userid: userid,
            projectid: projectid,
        }).select();
    }
}

export default Tokens;