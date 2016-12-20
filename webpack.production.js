var path = require('path');
var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/app.js',
    output: {
        path: './dist',
        publicPath: '/dist/',
        filename: 'qa-robot.js'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.html$/,
            exclude: /node_modules/,
            loader: 'html'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'file'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=10000'
        }, {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/octet-stream'
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file'
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=image/svg+xml'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: require.resolve('jquery'),
            loader: 'expose?jQuery!expose?$'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.ProvidePlugin({
            "$": 'jquery',
            jQuery: 'jquery'
        })
        // new ExtractTextPlugin('[name].css', {
        //     allChunks: true
        // })
    ],
    vue: {
        loaders: {
            css: 'style!css',
            sass: 'style!css!sass'
        },
        autoprefixer: {
            browsers: ['last 2 versions']
        }
    },
    resolve: {
        fallback: path.resolve(__dirname, './src/util')
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, './src'), path.resolve(__dirname, './node_modules')]
    }
};