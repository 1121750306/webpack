/**
 * Created by wanganyu on 2018/1/23.
 */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin')

console.log(__dirname)
console.log(path.resolve(__dirname, './index.html'))
module.exports = {
    entry: path.resolve(__dirname, './main.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader?minimize']
            },
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        // html-webpack-plugin不传参数会新建index.html，template为源文件模板
        new htmlWebpackPlugin({
            title: 'test plugin',
            template: path.resolve(__dirname, './index.html')
        })
    ]

    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             use: ExtractTextPlugin.extract({
    //                 use: ['css-loader']
    //             })
    //         }
    //     ]
    // },
    // plugins: [
    //     new ExtractTextPlugin({
    //         filename: `[name]_[contenthash:8].css`
    //     })
    // ]

}