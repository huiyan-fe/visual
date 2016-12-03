const package = require("./package.json");

module.exports = {
    entry: './app/visual.js',
    output: {
        filename: `visual.${package.version}.js`,
        path: './dist'
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