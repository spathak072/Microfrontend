// @ts-ignore
const {merge} = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// @ts-ignore
const {ModuleFederationPlugin} = require("webpack").container;
// @ts-ignore
const commonConfig = require('./webpack.common');
// @ts-ignore
const {dependencies} = require("../package.json")

const devConfig ={
    mode: 'development',
    output:{
        filename: "[name].[contenthash].js",
        publicPath:"http://localhost:8082/",
    },
    devServer: {
        hot: true,
        port: 8082,
        historyApiFallback: {
            index: '/index.html',
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'mfAuth',
            filename: 'remoteEntry.js',
            exposes:{
                './AuthApp':'./src/bootstrap'
            },
            shared:dependencies,
        }),
        new HTMLWebpackPlugin({
            template: './public/index.html',
        })
    ]
}

module.exports = merge(commonConfig, devConfig);