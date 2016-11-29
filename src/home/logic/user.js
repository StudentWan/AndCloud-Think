/**
 * Created by zoolsher on 2016/11/22.
 */
/**
 * logic
 * @param  {} []
 * @return {}     []
 */
export default class extends think.logic.base {
    /**
     * index action logic
     * @return {} []
     */
    loginAction() {
        if(this.isPost()&&this.get("type")==="login") {
            let rules = {
                username: {
                    required: true,
                    string: true,
                    minLength: 3,
                    maxLength: 30
                },
                password: {
                    required: true,
                    string: true,
                    minLength: 4,
                    maxLength: 30
                }
            };
            let flag = this.validate(rules);
            if (!flag) {
                return this.error("validate error", this.errors());
            }
        }
    }
}