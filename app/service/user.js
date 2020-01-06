'use strict';

const Service = require('egg').Service;

class User extends Service {
  async all() {
    return this.ctx.model.User.findAll();
  }

  async list({ offset = 0, limit = 10 }) {
    return this.ctx.model.User.findAndCountAll({
      offset,
      limit,
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
    });
  }

  async find(id) {
    const obj = await this.ctx.model.User.findByPk(id);
    if (!obj) {
      this.ctx.throw(404, 'database err');
    }
    return obj;
  }

  async create(obj) {
    return this.ctx.model.User.create(obj);
  }

  async update({ id, updates }) {
    const obj = await this.ctx.model.User.findByPk(id);
    if (!obj) {
      this.ctx.throw(404, 'database err');
    }
    return obj.update(updates);
  }

  async del(id) {
    const obj = await this.ctx.model.User.findByPk(id);
    if (!obj) {
      this.ctx.throw(404, 'database err');
    }
    return obj.destroy();
  }
}

module.exports = User;
