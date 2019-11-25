#! /usr/bin/env node

// 解析用户的参数

let progarm = require('commander');
let configs = {
    '-p,--port <val>':'set rs-server port'
}

Object.entries(configs).forEach(([key, value]) => {
    progarm.option(key,value)
});
progarm.name("rs-server").usage('<options>')
progarm.on('--help',function () {
    console.log('Examples:');
    console.log(`  $ rs-server --port 3000`);
})
let obj = progarm.parse(process.argv); // 用户传递的配置

let Server = require('../lib/http-server');


let defaultConfig = {
    port: 3000,
    dir: process.cwd(),

    ...obj
} // 用用户的输入的参数 覆盖掉默认参数 ，创建服务，并且开启服务
let server = new Server(defaultConfig);
server.start();
