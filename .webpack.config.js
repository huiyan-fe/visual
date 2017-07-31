const package = require("./package.json");
const path = require('path');

module.exports = {
    entry: './app/visual.js',
    output: {
        filename: `visual.${package.version}.js`,
        path: path.resolve(__dirname, "dist")
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['latest']
            }
        }]
    }
}