const glob = require('fast-glob');

(async function () {
  const entries = await glob(['**/*.js']); // 拿到目录下的所有.js文件

  console.log(entries); // [ '1.connect.js','2.static.js','3.module.js','4.resolve.js','5.gloab.js']
})();
