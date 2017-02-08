const webpack = require('webpack');

const dotEnvConfig = require('dotenv').config();
const dotEnvVars = Object.keys(dotEnvConfig).
	reduce( (acc, key) => {
		acc[key] = JSON.stringify(dotEnvConfig[key]);
		return acc;
}, {
	NODE_ENV: JSON.stringify(process.env.NODE_ENV)
});

const NODE_ENV = process.env.NODE_ENV;
const inProductionMode = NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	devtool: inProductionMode ? undefined : 'cheap-module-eval-source-map',
	entry: [
		'./app/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: 'index_bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	},
    resolve: {
        extensions: ['.json', '.jsx', '.js']
    },
	plugins: [
	    HtmlWebpackPluginConfig,
        new webpack.DefinePlugin({'process.env': dotEnvVars})
    ]
};