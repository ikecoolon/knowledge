const extracss = require('extract-text-webpack-plugin');
const minicss = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
// loader/plugin 区别
module.exports = {
    mode: 'development',
    entry:
        {
            app: ['./app.js'],
            app2: ['./app2.js']
        },
    output: {
        filename: './[name].js',
    },
    //loader
    module: {
        rules: [
            {
                test: /\.js/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.tsx?$/,//ts-loader typescript
                loader: 'ts-loader'
            },
            {
                test: /\.(png|jgp|jgep|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: '[name].[hash:4].[ext]',
                            outputPath: 'asset/img',
                            publicPath: 'asset/img',
                            limit: 5000
                        }
                    },
                    {
                        loader: "img-loader",//最核心作用图片压缩
                        options: {}
                    }
                ]

            },
            {
                test: /\.css$/,
                use: [
                    {loader: minicss.loader},
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                //css 模块化
                                // localIdentName:'[path]_[name]_[local]_[hash:4]'
                                localIdentName: '[local]'
                            }
                        }
                    },
                    {
                        //1、自动加前缀
                        //postcss-cssnext 可以使用下一代css
                        //雪碧图
                        loader: "postcss-loader",
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')(),
                                require('postcss-cssnext')()
                            ]
                        }

                    }
                ]
                //将css合并成一个额外的文件
                // use: extracss.extract({
                //     fallback: {
                //         loader: "style-loader"
                //     },
                //     use: [
                //
                //         {
                //             loader: "css-loader",
                //             options: {
                //                 modules: {
                //                     //css 模块化
                //                     // localIdentName:'[path]_[name]_[local]_[hash:4]'
                //                     localIdentName: '[local]'
                //                 }
                //             }
                //         },
                //         {
                //             //1、自动加前缀
                //             //postcss-cssnext 可以使用下一代css
                //             //雪碧图
                //             loader: "postcss-loader",
                //             options: {
                //                 ident: 'postcss',
                //                 plugins: [
                //                     require('postcss-cssnext')()
                //                 ]
                //             }
                //
                //         }
                //     ]
                // })


            }
        ]
    },
    //插件
    plugins: [
        // new extracss({
        //     filename: '[name].min.css'
        // }),
        new minicss({
            filename: "[name].min.css"
        }),
        new htmlWebpackPlugin({
            template: "index.html",
            filename: "index.html",
            chunks: ['app']
        }),
        new htmlWebpackPlugin({
            template: "index.html",
            filename: "index2.html",
            chunks: ['app2']
        })
    ]
};
