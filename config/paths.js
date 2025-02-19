const path = require('path')

const paths = {
  entry: path.resolve(__dirname, '../src/index'),
  build: path.resolve(__dirname, '../build'),
  src: path.resolve(__dirname, '../src'),
  assets: path.resolve(__dirname, '../src/assets'),
  components: path.resolve(__dirname, '../src/components'),
  template: path.resolve(__dirname, '../public/index.html'),
}

module.exports = paths
