'use strict';
/*
 * @Author: chopper
 * @Date: 2020-04-09 17:01:48
 * @LastEditTime: 2020-04-09 17:06:48
 * @LastEditors: Please set LastEditors
 * @Description: 使用插件
 * @FilePath: /node_demo/egg-msg-flash/app.js
 */
const assert = require('power-assert');

module.exports = app => {
  const index = app.config.coreMiddleware.indexOf('session');
  assert.ok(index > 0, 'x require [egg-session] plugins');
  app.config.coreMiddleware.splice(index, 0, 'flash');
};
