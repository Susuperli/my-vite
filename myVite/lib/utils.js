function normalizePath(path) {
  // 保证所有的路径分隔符是'/'，而非 '\'，windows系统是\，而mac是/
  return path.replace(/\\g/, '/');
}

exports.normalizePath = normalizePath;
