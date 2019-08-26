const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './source/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'snapterest.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'latest'],
                    plugins: ['transform-class-properties']
                }
            }],
            exclude: path.resolve(__dirname, 'node_modules')
        }],

    },
    // Plugins
    plugins: [
        new htmlWebpackPlugin({
            template: './build/index.html',
            filename: 'index.html',
            hash: true
        })
    ],
};