const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const pkg = require("./package.json");
module.exports = {
    mode:'development',
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static:'./dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Starter',
            template: path.resolve(__dirname, "src", "index.html")
        }),
        new BundleAnalyzerPlugin({
			analyzerMode: pkg.analyze ? "server" : "disabled",
			openAnalyzer: pkg.analyze ? true : false,
			generateStatsFile: pkg.analyze ? true : false,
			excludeAssets: null,
        }),
       
    ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean:true,
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks:'all',
              }
          }
        },
        runtimeChunk: 'single',
        moduleIds:'deterministic'
      },
    module: {
        rules: [{
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type:'asset/resource',
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
              }
        ]
    }
};