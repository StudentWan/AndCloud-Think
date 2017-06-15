'use strict';

export default {
    timeout: 30,
    port: 8000,
    zmq: {
        url: 'tcp://127.0.0.1:12001'
    },
    workspace: '/opt/andcloud-workspace/',
    db: {
        type: "mysql",
        log_sql: true,
        log_connect: true,
        adapter: {
            mysql: {
                host: "127.0.0.1",
                port: "8889",
                database: "andcloud", //数据库名称
                user: "root", //数据库帐号
                password: "root", //数据库密码
                prefix: "",
                encoding: "utf8"
            }
        }
    },
    error: {
        key: "errno", //error number
        msg: "errmsg" //error message
    },
    session: {
        name: 'thinkjs',
        type: 'file',
        secret: 'OXTG8#DW',
        timeout: 24 * 3600,
        cookie: { // cookie options
            length: 32,
            httponly: true
        },
        adapter: {
            file: {
                path: think.RUNTIME_PATH + '/session',
            }
        }
    },
    view: {
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
    }
}