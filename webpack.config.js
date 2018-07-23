const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'eval-source-map',
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([{ 
            from: path.resolve(__dirname, 'assets'),
            to: path.resolve(__dirname, 'dist', 'assets')
         }]),
        new HtmlWebpackPlugin({
            path: path.resolve(__dirname, 'dist', 'index.html'),
            template: 'index.html'
        })
    ],
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
}