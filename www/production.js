var thinkjs = require('thinkjs');
var path = require('path');

var rootPath = path.dirname(__dirname);

var instance = new thinkjs({
    APP_PATH: rootPath + path.sep + 'app',
    RUNTIME_PATH: rootPath + path.sep + 'runtime',
    ROOT_PATH: rootPath,
    UPLOAD_PATH: __dirname + '/upload',
    RESOURCE_PATH: __dirname,
    env: 'production'
});

// Build code from src to app directory.

instance.run();