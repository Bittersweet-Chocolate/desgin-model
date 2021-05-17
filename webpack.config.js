/*
 * @Author: your name
 * @Date: 2021-04-12 20:02:46
 * @LastEditTime: 2021-05-17 10:47:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \desgin-model\webpack.config.js
 */
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: "main.js",
        path: resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"  // bundle.js 会自动注入
        })
    ],
    devServer: {
        contentBase: resolve(__dirname, "dist"),  // 根目录
        open: true,  // 自动打开浏览器
        port: 9000,   // 端口
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}