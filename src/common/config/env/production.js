'use strict';

export default {
    db: {
        type: "mysql",
        log_sql: true,
        log_connect: true,
        adapter: {
            mysql: {
                host: "127.0.0.1",
                port: "3306",
                database: "andcloud", //数据库名称
                user: "root", //数据库帐号
                password: "123456", //数据库密码
                prefix: "",
                encoding: "utf8"
            }
        }
    }
};