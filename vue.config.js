const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Bicester Direct',
    shortName: 'Bicester Direct',
    themeColor: '#fff',
    msTileColor: '#000'
  }
})
