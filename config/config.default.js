/* eslint valid-jsdoc: "off" */

'use strict';

/**内置的 appInfo 有
 pkg    package.json
 name    应用名，同 pkg.name
 baseDir    应用代码的目录
 HOME    用户目录，如 admin 账户为 /home/admin
 root    应用根目录，只有在 local 和 unittest 环境下为 baseDir，其他都为 HOME。**/

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require('path');
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1576653091664_7454';

  // add your middleware config here   配置需要的中间件，数组顺序即为中间件的加载顺序
  config.middleware = ['jwt'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // token
  config.jwt = {
    enable: false,
    ignore: ['/login'],
    jwtKey: 'wangyalin',
  };

  config.cluster = {
    listen: {
      path: '',
      port: 1234,
      hostname: '0.0.0.0',
      // hostname: '127.0.0.1',
    },
  };

  config.multipart = {
    whitelist: ['.png', '.jpg', '.pdf', 'doc'], // 覆盖整个白名单，只允许上传 '.png' 格式
  };

  config.security = {
    csrf: {
      enable: false,
      // headerName: 'x-csrf-token' // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
    },
  };

  // static files and cache files
  config.static = {
    // 静态化访问前缀,如：`http://127.0.0.1:7001/api/Amap/index.html`
    prefix: '/public/',
    dir: [ path.join(appInfo.baseDir, 'app/public'), { prefix: '/app/', dir: path.join(appInfo.baseDir, 'app/web') } ], // `String` or `Array:[dir1, dir2, ...]` 静态化目录,可以设置多个静态化目录
    // dir:  path.join(appInfo.baseDir, 'app/public'), // `String` or `Array:[dir1, dir2, ...]` 静态化目录,可以设置多个静态化目录
    dynamic: true,
    preload: false,
    maxAge: 31536000, // in prod env, 0 in other envs
    buffer: true, // in prod env, false in other envs
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
      '.html': 'nunjucks'
    },
  };

  // sql
  config.sequelize = {
    dialect: 'postgres', // support: mysql, mariadb, postgres, mssql
    database: 'postgres',
    host: '47.52.102.96',
    // host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
  };


  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    // 下面这条加上才能共享跨域session，同时前端ajax请求也要加上响应的参数
    credentials: true,
  };

  return {
    ...config,
    ...userConfig,
  };
};
