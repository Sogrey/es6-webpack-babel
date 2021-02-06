const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    },
    // 配置sourceMap
    optimization: { // 1. 这个配置必须
        minimize: false
    },
    // eval	                    每个module会封装到 eval 里包裹起来执行，并且会在末尾追加注释 //@ sourceURL.
    // source-map	            生成一个SourceMap文件（编译速度最慢）
    // hidden-source-map	    和 source-map 一样，但不会在 bundle 末尾追加注释.
    // inline-source-map	    生成一个 DataUrl 形式的 SourceMap 文件.
    // eval-source-map	        每个module会通过eval()来执行，并且生成一个DataUrl形式的SourceMap.
    // cheap-source-map	        生成一个没有列信息（column-mappings）的SourceMaps文件，不包含loader的 sourcemap（譬如 babel 的 sourcemap）
    // cheap-module-source-map	生成一个没有列信息（column-mappings）的SourceMaps文件，同时 loader 的 sourcemap 也被简化为只包含对应行的。
    devtool: "source-map", // 2. 这个配置必须
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
                            corejs: {
                                version: "3.8.3",
                                proposals: true
                            } //https://babeljs.io/docs/en/babel-preset-env#corejs
                        }]
                    ]
                }
            }
        }]
    }
};