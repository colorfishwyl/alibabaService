'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  // router.get('/', 'home.index');
  router.redirect('/', '/api/3Dmap.html', 302);
};

// 配置的中间件是全局的，会处理每一次请求。 如果你只想针对单个路由生效，可以直接在 app/router.js 中实例化和挂载，如下：
// module.exports = app => {
//   const gzip = app.middleware.gzip({ threshold: 1024 });
//   app.router.get('/needgzip', gzip, app.controller.handler);
// };

// Router 详细定义说明
// 下面是路由的完整定义，参数可以根据场景的不同，自由选择：
//
// router.verb('path-match', app.controller.action);
// router.verb('router-name', 'path-match', app.controller.action);
// router.verb('path-match', middleware1, ..., middlewareN, app.controller.action);
// router.verb('router-name', 'path-match', middleware1, ..., middlewareN, app.controller.action);
// 路由完整定义主要包括5个主要部分:
//
//     verb - 用户触发动作，支持 get，post 等所有 HTTP 方法，后面会通过示例详细说明。
// router.head - HEAD
// router.options - OPTIONS
// router.get - GET
// router.put - PUT
// router.post - POST
// router.patch - PATCH
// router.delete - DELETE
// router.del - 由于 delete 是一个保留字，所以提供了一个 delete 方法的别名。
// router.redirect - 可以对 URL 进行重定向处理，比如我们最经常使用的可以把用户访问的根目录路由到某个主页。
// router-name 给路由设定一个别名，可以通过 Helper 提供的辅助函数 pathFor 和 urlFor 来生成 URL。(可选)
// path-match - 路由 URL 路径。
// middleware1 - 在 Router 里面可以配置多个 Middleware。(可选)
// controller - 指定路由映射到的具体的 controller 上，controller 可以有两种写法：
// app.controller.user.fetch - 直接指定一个具体的 controller
// 'user.fetch' - 可以简写为字符串形式
// 注意事项
// 在 Router 定义中， 可以支持多个 Middleware 串联执行
// Controller 必须定义在 app/controller 目录中。
// 一个文件里面也可以包含多个 Controller 定义，在定义路由的时候，可以通过 ${fileName}.${functionName} 的方式指定对应的 Controller。
// Controller 支持子目录，在定义路由的时候，可以通过 ${directoryName}.${fileName}.${functionName} 的方式制定对应的 Controller。
// 下面是一些路由定义的方式：
//
// // app/router.js
// module.exports = app => {
//   const { router, controller } = app;
//   router.get('/home', controller.home);
//   router.get('/user/:id', controller.user.page);
//   router.post('/admin', isAdmin, controller.admin);
//   router.post('/user', isLoginUser, hasAdminPermission, controller.user.create);
//   router.post('/api/v1/comments', controller.v1.comments.create); // app/controller/v1/comments.js
// };
