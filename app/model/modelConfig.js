'use strict';
module.exports = {
  // 不要添加时间戳属性 (updatedAt, createdAt)
  timestamps: true,

  // 不从数据库中删除数据，而只是增加一个 deletedAt 标识当前时间
  // paranoid 属性只在启用 timestamps 时适用
  paranoid: false,

  // 不使用驼峰式命令规则，这样会在使用下划线分隔
  // 这样 updatedAt 的字段名会是 updated_at
  underscored: false,

  // 禁止修改表名. 默认情况下
  // sequelize会自动使用传入的模型名（define的第一个参数）做为表名
  // 如果你不想使用这种方式你需要进行以下设置
  freezeTableName: true,

  // 定义表名
  // tableName: 'users',
};
