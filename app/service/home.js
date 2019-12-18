// app/service/user.js

// 从 egg 上获取（推荐）
const Service = require('egg').Service;
class HomeService extends Service {
    // implement
}
module.exports = HomeService;

// 从 app 实例上获取
// module.exports = app => {
//     return class HomeService extends app.Service {
//         // implement
//     };
// };
