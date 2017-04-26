'use strict';

export default class extends think.controller.base { //创建controller，继承think.controller.base,think.controller.base类继承自think.http.base类，控制器皆须继承
    /**
     * some base method in here
     */
    async __before() {
        if (this.http.action !== "login") {
            this.user_id = await this.session('user_id');
            if (!think.isEmpty(this.user_id)) {
                let userModel = this.model("users");
                try {
                    this.user = await userModel.getUserViaId(this.user_id);
                    //若已登录，获取用户信息
                } catch (e) {
                    think.log(e.message);
                }
            } else {
                return this.redirect('/user/login');
            }
        }
    }
}