/**
 一般来说中间件也会有自己的配置。在框架中，一个完整的中间件是包含了配置处理的。我们约定一个中间件是一个放置在 app/middleware 目录下的单独文件，它需要 exports 一个普通的 function，接受两个参数：
 options: 中间件的配置项，框架会将 app.config[${middlewareName}] 传递进来。
 app: 当前应用 Application 的实例。
 **/
'use strict';
const jwt = require('jsonwebtoken');

module.exports = (options, app) => {
  return async function checkToken(ctx, next) {
    if (ctx.url !== '/') {
      const token = ctx.header.authorization;
      if (token) {
        try {
          await jwt.verify(token, options.jwtKey); // 如果 token 过期或验证失败，将返回401
          await next();
        } catch (err) {
          ctx.throw(401, 'invalid token');
        }
      } else {
        ctx.throw(401, 'no token detected in http header "Authorization"');
      }
    } else {
      await next();
    }
  };
};
