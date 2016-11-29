'use strict';

import Base from './base.js';
import {CREATED_A_NEW_PROJECT} from './../../../actionnames';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    testAction(){
        return this.success("null");
    }

    async indexAction() {
        global.sock.sendAction(CREATED_A_NEW_PROJECT,{
            projectID:''
        });
        this.assign('what','ever');
        let userModel = this.model("users");
        let res = await userModel.findUser("5777138f55e5398008801aef");
        this.assign("user",res);
        return this.display();
    }
}