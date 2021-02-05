const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        ["@babel/preset-env", {
                            useBuiltIns: "entry", // usage 仅打包使用到的ES6+特性
                            corejs: { version: "3.8.3", proposals: true } //https://babeljs.io/docs/en/babel-preset-env#corejs
                        }]
                    ]
                }
            }
        }]
    }
};