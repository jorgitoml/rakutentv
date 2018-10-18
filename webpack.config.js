const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: ()=>[
                                autoprefixer(
                                    {
                                        browsers: [
                                         "> 1%",
                                         "last 2 versions"
                                        ]
                                    }
                                )
                            ]
                        } 
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                autoprefixer(
                                    {
                                        browsers: [
                                            "> 1%",
                                            "last 2 versions"
                                        ]
                                    }
                                )
                            ]
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit:8000&name=images/[name].[ext]' 
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ]
    }, 
    devServer: {
        host: 'dev.rakuten.tv',
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new WebappWebpackPlugin('./src/assets/img/favicon.png')
    ]
};