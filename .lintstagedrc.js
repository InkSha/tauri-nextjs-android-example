/**
 * 校验对象
 *
 * key 为匹配文件
 *
 * val 为执行命令
 *
 * @type { Record<string, string[]> }
 */
export default {
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix'], // eslint 检查
  '**/*.{js,jsx,ts,tsx,less,scss,css,md,json}': ['prettier --write'], // prettier 格式化
}
