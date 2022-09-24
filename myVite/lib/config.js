const { normalizePath } = require('./utils');

async function resolveConfig() {
  const root = normalizePath(process.cwd()); // 当前进程的根目录

  const config = {
    root,
  };

  return config;
}

module.exports = resolveConfig;
