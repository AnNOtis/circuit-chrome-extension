const tasks = require('./tasks')

console.log('[Copy assets]')
console.log('-'.repeat(80))
tasks.copyAssets('dev')

console.log('[Webpack Dev]')
console.log('-'.repeat(80))

exec('webpack-dev-server --config webpack/dev.config.js')
