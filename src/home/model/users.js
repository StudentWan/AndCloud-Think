'use strict';
import md5 from 'md5';
/**
 * model
 */
class Users extends think.model.mongo {

    async findUser(id){
        return await this.find({_id:id});
    }

    async loginUser(username, password){
        let user = await this.where({"name":username}).find();
        if(Users.vertify(password,user["pass"])){
            return user;
        }else{
            return false;
        }
    }

    async getUserViaId(id){
        try {
            return await this.where({_id: id}).find();
        }catch(e){
            return false;
        }
    }

    async isUserNameExist(username){
        try{
            let find = await this.where({"name":username}).find();
            return !think.isEmpty(find);
        }catch (e){
            think.log(e.message,"model");
            return false;
        }
    }

    async addUser(username,password){
        try {
            let insertId = await this.add({"name": username, "pass": Users.encrypt(password)});
            return insertId;
        }catch(e){
            think.log(`add user cause wrong ${e}`,'app/model');
            return false;
        }
    }

    static encrypt(password){
        return md5(password);
    }

    static vertify(password, hash){
        return md5(password) === hash;
    }
}

export default Users;