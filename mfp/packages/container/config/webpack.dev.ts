// @ts-ignore
const {merge} = require('webpack-merge');

// @ts-ignore
const {ModuleFederationPlugin} = require('webpack').container;
// @ts-ignore
const commonConfig = require('./webpack.common');
// @ts-ignore
const {dependencies} = require("../package.json")

const devConfig ={
    mode: 'development',
    output:{
        filename: "[name].[contenthash].js",
        publicPath:"http://localhost:8080/",
    },
    devServer: {
        hot: true,
        port: 8080,
        historyApiFallback: {
            index: '/index.html',
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name:"container",
            remotes:{
                marketing: "mfMarketing@http://localhost:8081/remoteEntry.js",
                mfAuth: "mfAuth@http://localhost:8082/remoteEntry.js",
            },
            shared: dependencies,
        }),

    ]
}

module.exports = merge(commonConfig, devConfig);