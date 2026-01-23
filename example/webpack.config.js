const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  target: 'node',

  entry: './src/index.tsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',

    // 👇 mantiene nombre real del addon
    assetModuleFilename: '[name][ext]'
  },

  externals: {
    '@nodegui/nodegui': 'commonjs @nodegui/nodegui',
    '@cervisebas/nodegui-plugin-animation': 'commonjs @cervisebas/nodegui-plugin-animation'
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },

      // Imágenes (webpack 5 nativo)
      {
        test: /\.(png|jpe?g|gif|svg|bmp|otf)$/i,
        type: 'asset/resource'
      },

      // Addons nativos
      {
        test: /\.node$/,
        type: 'asset/resource'
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.json']
  },

  plugins: [
    new CleanWebpackPlugin()
  ]
}
