'use strict';
/**
 * template config
 */
export default {
    type: "nunjucks", //模版引擎
    content_type: "text/html", //输出模版时发送的 Content-Type
    file_ext: ".html", //文件的扩展名
    file_depr: "/", //控制器和操作之间的连接符
    root_path: think.ROOT_PATH + "/view", //视图文件的根目录
    adapter: { //模版引擎需要的配置项
        ejs: {}, //使用 ejs 模板引擎时额外配置
        nunjucks: {

        } //使用 nunjucks 模板引擎时额外配置
    }
};