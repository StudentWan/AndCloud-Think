'use strict';

class Projects extends think.model.base {
    init(...args){
        super.init(...args);
        this.tableName = "T_PROJECT";
    }
    async addProject(projectName, filePath, userId) {
        return await this.add({
            name: projectName,
            filename: filePath,
            userid: userId,
            uploadtime: new Date().getTime().toString(),
        });
    }

    async getProjectViaId(id) {
        let data = await this.where({"id": id}).find();
        return data;
    }

    async getProjectByUserID(user_id) {
        console.log(user_id);
        let data = await this.where({'userid': user_id}).select();
        return data;
    }
}

export default Projects;