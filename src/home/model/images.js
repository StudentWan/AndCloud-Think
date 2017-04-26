class Images extends think.model.base {
    init(...args) {
        super.init(...args);
        this.tableName = 'T_MIRRORIMAGE';
    }

    async getImage(imageid) {
        return await this.where({
            id: imageid
        }).select();
    }
}

export default Images;