'use strict';

export default class extends think.controller.base { //创建controller，继承think.controller.base,think.controller.base类继承自think.http.base类，控制器皆须继承
    /**
     * some base method in here
     */
    async indexAction() {
        this.user_id = await this.session('user_id');
        if (!think.isEmpty(this.user_id)) {
            return this.redirect('/user');
        } else {
            return this.display('index/index');
        }

    }
}