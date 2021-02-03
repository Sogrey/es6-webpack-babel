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
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        ["@babel/preset-env", {
                            useBuiltIns: "usage" // 仅打包使用到的ES6+特性
                        }]
                    ]
                }
            }
        }]
    }
};