const { init, parse } = require('es-module-lexer');

(async function () {
  const soureceCode = `import _ from 'lodash';\nexport var age = 15;`;

  await init;
  const [imports, exports] = parse(soureceCode);

  console.log({ imports, exports });
})();
