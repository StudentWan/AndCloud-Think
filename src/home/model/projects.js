'use strict';

class Projects extends think.model.mongo {
    async addProject(projectName, filePath, userId) {
        return await this.add({
            name: projectName,
            filePath: filePath,
            userId: userId,
            createdTime: new Date().getTime().toString(),
        });
    }

    async getProjectViaId(id) {
        let data = await this.where({_id: id}).find();
        return data;
    }

    async getProjectByUserID(user_id) {
        console.log(user_id);
        let data = await this.where({'userId': user_id}).select();
        return data;
    }
}

export default Projects;