// @ts-ignore
const {merge} = require('webpack-merge');
// @ts-ignore
const {ModuleFederationPlugin} = require("webpack").container;
// @ts-ignore
const commonConfig = require('./webpack.common');
// @ts-ignore
const {dependencies} = require("../package.json");

const productionConfig = {
    mode: "production",
    output:{
        filename: "[name].[contenthash].js",
        publicPath: "/auth/latest",
    },
    plugins:[
        new ModuleFederationPlugin({
            name: 'mfAuth',
            filename: 'remoteEntry.js',
            exposes:{
                './AuthApp':'./src/bootstrap'
            },
            shared: dependencies
        })
    ]
}


  module.exports= merge(commonConfig, productionConfig);