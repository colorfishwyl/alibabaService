'use strict';

const Controller = require('egg').Controller;

class CommonController extends Controller {
  async index(){
    await this.ctx.redirect('/app/index.html');
  }
}

module.exports = CommonController;
