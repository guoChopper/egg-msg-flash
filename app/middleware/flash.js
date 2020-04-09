'use strict';
/*
 * @Author: chopper
 * @Date: 2020-04-09 16:53:30
 * @LastEditTime: 2020-04-09 17:00:30
 * @LastEditors: Please set LastEditors
 * @Description: 插件
 * @FilePath: /node_demo/egg-msg-flash/app/middleware/flash.js
 */

module.exports = ({ key }, app) => async (ctx, next) => {
  ctx.session[key] = ctx.session[key] || {};
  const flash = ctx.session[key];
  ctx.session[key] = [];
  function set(msg) {
    ctx.session[key] = msg;
  }
  const get = () => flash;
  Object.defineProperty(ctx, 'flash', {
    set,
    get,
    enumerable: true,
  });
  ctx.request.flash = (type, msg) => {
    ctx.flash = { type, message: msg };
  };
  [ 'success', 'error', 'info', 'warning' ].forEach(type => {
    ctx['flash_' + type] = msg => (ctx.flash = { type, message: msg });
  });
  await next();
  if (ctx.status === 302 && ctx.session && !ctx.session[key]) {
    ctx.session[key] = flash;
  }
};
