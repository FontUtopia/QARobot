var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: "source-map",

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
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(scss|sass)$/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: require.resolve('jquery'),
            loader: 'expose?jQuery!expose?$'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            jQuery: "jquery"
        })
    ],
    // devtool: '#source-map',
    resolve: {
        fallback: path.resolve(__dirname, './src/util')
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, './src'), path.resolve(__dirname, './node_modules')]
    }
}