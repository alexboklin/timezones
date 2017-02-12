const webpack = require('webpack');

const dotEnvVars = require('dotenv').config();
const envVars = Object.keys(dotEnvVars).
	reduce( (acc, key) => {
		acc[`__${key.toUpperCase()}__`] = JSON.stringify(dotEnvVars[key]);
		return acc;
}, {
	__NODE_ENV__: JSON.stringify(process.env.NODE_ENV)
});

const NODE_ENV = process.env.NODE_ENV;
const inProductionMode = NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

/*On how to use Hot Module Replacement + React Hot Loader, see:
https://medium.com/@rajaraodv/webpacks-hmr-react-hot-loader-the-missing-manual-232336dc0d96#.npgb2r5nn
http://gaearon.github.io/react-hot-loader/getstarted/*/
module.exports = {
	devtool: inProductionMode ? undefined : 'cheap-module-eval-source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:8080', // <-- Enables websocket connection (needs url and port)
		'webpack/hot/only-dev-server', // <-- to perform HMR in the browser; "only" prevents reload on syntax errors
		'./app/index.js' // The appʼs entry point
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
				// include: path.join(__dirname, src) <-- right now there's no src folder
				use: ['react-hot-loader', 'babel-loader']
			}
		]
	},
    resolve: {
        extensions: ['.json', '.jsx', '.js']
    },
	plugins: [
	    HtmlWebpackPluginConfig,
        new webpack.DefinePlugin(envVars),
		new webpack.HotModuleReplacementPlugin() // <-- To generate hot update chunks
        // TODO: [HMR] Consider using the NamedModulesPlugin for module names.
    ],
	devServer: {
		hot: true, // <-- Enables HMR in webpack-dev-server and in libs running in the browser
		contentBase: './app'
	}
};