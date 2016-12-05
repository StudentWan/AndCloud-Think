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
        let user = await this.find({name:username});
        if(Users.vertify(password,user.pass)){
            return user;
        }else{
            return false;
        }
    }

    getId(){
        return this["_id"];
    }

    async addUser(username,password){
        try {
            return await this.add({"name": username, "pass": Users.encrypt(password)});
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