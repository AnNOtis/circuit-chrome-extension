/* eslint-disable import/no-unassigned-import, no-undef */
require('shelljs/global')

exports.copyAssets = type => {
  const env = type === 'build' ? 'prod' : type
  rm('-rf', type)
  mkdir(type)
  cp(`chrome/manifest.${env}.json`, `${type}/manifest.json`)
  cp('-R', 'chrome/assets/*', type)
  cp('-R', 'chrome/views/*', type)
  mkdir(`${type}/styles`)
  cp('node_modules/tachyons/css/tachyons.css', `${type}/styles/tachyons.css`)
}
