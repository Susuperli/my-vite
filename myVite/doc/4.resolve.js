const resolve = require('resolve'); // 找到包名的入口文件

const res = resolve.sync('check-is-array', { basedir: __dirname });

console.log(res);
