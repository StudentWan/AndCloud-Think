'use strict';

export default class extends think.controller.base {
    /**
     * some base method in here
     */
    async __before() {
        if (this.http.action !== "login") {
            this.user_id = await this.session('user_id');
            if (!think.isEmpty(this.user_id)) {
                let userModel = this.model("users");
                this.user = await userModel.getUserViaId(this.user_id);
            } else {
                return this.redirect('/user/login');
            }
        }
    }
}