const {merge} = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;
const commonConfig = require('./webpack.common');
const {dependencies} = require("../package.json")

const devConfig ={
    mode: 'development',
    devServer: {
        hot: true,
        port: 8080,
        historyApiFallback: {
            index: 'index.html',
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name:"container",
            remotes:{
                marketing: "mfMarketing@http://localhost:8081/remoteEntry.js"
            },
            shared: dependencies,
        }),
        new HTMLWebpackPlugin({
            template: './public/index.html',
        })
    ]
}

module.exports = merge(commonConfig, devConfig);