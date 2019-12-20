'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await this.ctx.render('3Dmap.html');
  }

  // Application 对象获取方式
  async fetch(){
    // 访问Context对象获取Application
    this.ctx.body = this.app.cache.get(this.ctx.query.id);
    this.ctx.body = this.ctx.app.cache.get(this.ctx.query.id);
    // 在继承于 Controller, Service 基类的实例中，可以通过 this.app 访问到 Application 对象。
    this.ctx.body = this.app.cache.get(this.ctx.query.id);
  }

  // 可以在 Context 的实例上获取到当前请求的 Helper(ctx.helper) 实例。
  async getHelper() {
    const { app, ctx } = this;
    const id = ctx.query.id;
    const user = app.cache.get(id);
    ctx.body = ctx.helper.formatUser(user);
  }

  // Config 我们可以通过 app.config 从 Application 实例上获取到 config 对象，也可以在 Controller, Service, Helper 的实例上通过 this.config 获取到 config 对象。
  async getConfig(){
    const keys=  this.config.keys;
  }
}

module.exports = HomeController;

/** 在 Controller 文件中，可以通过两种方式来引用 Controller 基类：
    从 egg 上获取（推荐）
    const Controller = require('egg').Controller;
    class UserController extends Controller {
    // implement
  }
    module.exports = UserController;
    从 app 实例上获取
    module.exports = app => {
      return class UserController extends app.Controller {
       implement
    };
  }; **/
