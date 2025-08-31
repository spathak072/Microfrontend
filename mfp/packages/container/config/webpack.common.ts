const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports={
    module:{
        rules:[
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    }
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use:{
                    loader: 'ts-loader',
                }
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx','.css'],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html',
        })
    ]
}