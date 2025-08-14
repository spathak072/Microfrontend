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
    devServer: {
        hot: true,
        port: 8081,
        historyApiFallback: {
            index: 'index.html',
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'mfMarketing',
            filename: 'remoteEntry.js',
            exposes:{
                './Marketing':'./src/bootstrap'
            },
            shared:dependencies,
        }),
        new HTMLWebpackPlugin({
            template: './public/index.html',
        })
    ]
}

module.exports = merge(commonConfig, devConfig);