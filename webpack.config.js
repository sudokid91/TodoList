const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './server/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/src/index.html',
        })
    ] 
}

module.exports = config;