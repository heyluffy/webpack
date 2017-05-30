var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build",
        // filename: "bundle.js"
        filename: "[name]-[hash].js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: __dirname + "/app/index.tmpl.html"}
      ), // 一个插件的实例，并传入参数
      new webpack.optimize.OccurrenceOrderPlugin(), // 给组件编号
      new webpack.optimize.UglifyJsPlugin(), // 压缩js插件
      // new ExtractTextPlugin("style.css") //定义分离出来的样式文件
      new ExtractTextPlugin("[name]-[hash].css") //定义分离出来的样式文件
    ],
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
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: [
                {loader: "css-loader",
                  options: {
                    modules: true,
                    importLoader: 1
                  }
                },
                {loader: "postcss-loader",
                  options: {
                    plugins: (loader) => [
                      require('autoprefixer')()
                    ]
                  }
                }
              ]
            })

            //   [
            //   // "style-loader",
            //   {loader: "css-loader",
            //     options: {
            //       modules: true,
            //       importLoader: 1
            //     }
            //   },
            //   {loader: "postcss-loader",
            //     options: {
            //       plugins: (loader) => [
            //         require('autoprefixer')()
            //       ]
            //     }
            //   }
            // ]
          }
        ]
    },
    devServer: {
        historyApiFallback: true, //跳转始终指向index.html,但页面应用非常适用
        inline: true, //热刷新
        port: 8111
    }
}