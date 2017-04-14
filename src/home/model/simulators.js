'use strict';

class Simulators extends think.model.base {
    init(...args){
        super.init(...args);
        this.tableName = "T_SIMULATORDOMAIN";
    }

    async getSimulator(id) {
        return await this.where({'id': id}).select();
    }

    async updateSimulator(id, deadlinetime) {
        return await this.where({'id': id}).update({'deadlinetime': deadlinetime});
    }
}

export default Simulators;