'use strict';

// 将 logger 目录放到代码目录下
const path = require('path');
module.exports = appInfo => {
    return {
        logger: {
            dir: path.join(appInfo.baseDir, 'logs'),
        },
        cluster : {
            listen: {
                path: '',
                port: 7000,
                hostname: '0.0.0.0',
                // hostname: '127.0.0.1',
            },
        }
    };
};
