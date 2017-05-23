'use strict';
/**
 * db config
 * @type {Object}
 */

export default {
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
                // host: "192.168.8.88",
                // port: "3306",
                // database: "andcloud", //数据库名称
                // user: "root", //数据库帐号
                // password: "123456", //数据库密码
                // prefix: "",
                // encoding: "utf8"
        },
        mongo: {

        }
    }
    // type: 'mongo',
    // host: '127.0.0.1',
    // port: '27017',
    // name:'ANDCLOUD',
    // database: 'ANDCLOUD',
    // prefix: '',
    // encoding: 'utf8',
    // nums_per_page: 10,
    // log_sql: true,
    // log_connect: true,
    // cache: {
    //     on: true,
    //     type: '',
    //     timeout: 3600
    // },
    // adapter: {
    //     mysql: {},
    //     mongo: {
    //         host: '127.0.0.1',
    //         port: '27017',
    //         database: 'ANDCLOUD',
    //         options: {}
    //     }
    // }
};