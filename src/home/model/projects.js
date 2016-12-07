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
}

export default Projects;