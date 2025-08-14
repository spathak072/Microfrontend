// @ts-ignore
const {merge} = require("webpack-merge")
// @ts-ignore
const {ModuleFederationPlugin} = require('webpack').container;
// @ts-ignore
const commonConfig = require("./webpack.common");
// @ts-ignore
const {dependencies} = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig={
    mode: "production",
    output:{
        filename: "[name].[contenthash].js",
    },
    plugins:[
        new ModuleFederationPlugin({
            name: "container",
            remotes:{
                marketing: `mfMarketing@${domain}/marketing/remoteEntry.js`
            },
            shared:dependencies,
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);
