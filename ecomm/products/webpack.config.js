const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require("webpack").container;
module.exports={
     entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name:'mfProducts',
      filename:'remoteEntry.js',
      exposes:{
        './ProductIndex':"./src/index"
      },
      shared:[
        '@faker-js/faker'
      ]
    })
  ],
  devServer: {
    static: './dist',
    port: 8081,
    open: true
  },
    mode:"development"
}