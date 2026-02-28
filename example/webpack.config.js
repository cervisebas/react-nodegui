const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  target: 'node',

  entry: './src/index.tsx',

  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'index.js',
    assetModuleFilename: '[name][ext]',
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },

      // Assets
      {
        test: /\.(png|jpe?g|gif|svg|bmp|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[hash][ext]',
        },
      },

      // Native addons
      {
        test: /\.node$/,
        loader: 'node-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
  },

  plugins: [new CleanWebpackPlugin()],
};
