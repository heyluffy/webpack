module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
            test: /\.json$/, //配置处理文件名的正则表达式
            use: [
              "json-loader"
            ]
          },
            {
                test: /\.js$/, //配置处理文件名的正则表达式
                use: [
                    {loader: "babel-loader"}
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {loader: "css-loader",
                      options: {
                        modules: true,
                        importLoader: 1
                      }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: "./public", //本地服务器的根目录
        historyApiFallback: true, //跳转始终指向index.html,但页面应用非常适用
        inline: true, //热刷新
        port: 8111
    }
}