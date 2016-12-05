'use strict';
/**
 * db config
 * @type {Object}
 */

export default {
    type: 'mongo',
    host: '127.0.0.1',
    port: '27017',
    name:'ANDCLOUD',
    database: 'ANDCLOUD',
    prefix: '',
    encoding: 'utf8',
    nums_per_page: 10,
    log_sql: true,
    log_connect: true,
    cache: {
        on: true,
        type: '',
        timeout: 3600
    },
    adapter: {
        mysql: {},
        mongo: {
            host: '127.0.0.1',
            port: '27017',
            database: 'ANDCLOUD',
            options: {}
        }
    }
};