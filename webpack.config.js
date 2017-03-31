const webpack = require('webpack');
const path = require('path');
const dotEnvVars = require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const inProductionMode = NODE_ENV === 'production';

const envVars = Object.keys(dotEnvVars).
	reduce( (acc, key) => {
		acc[`__${key.toUpperCase()}__`] = JSON.stringify(dotEnvVars[key]);
		return acc;
}, {
	__NODE_ENV__: JSON.stringify(NODE_ENV)
});

const plugins = [
	new webpack.DefinePlugin(envVars),
    new ExtractTextPlugin('styles.css'),
	new HtmlWebpackPlugin({
		template: path.join(__dirname, '/app/index.html')
	})
];

if (inProductionMode) {
	plugins.push(
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest']
		})
	)
} else {
	plugins.push(
		// TODO: [HMR] Consider using the NamedModulesPlugin for module names.
		new webpack.HotModuleReplacementPlugin() // <-- To generate hot update chunks
	)
}

/*On how to use Hot Module Replacement + React Hot Loader, see:
https://medium.com/@rajaraodv/webpacks-hmr-react-hot-loader-the-missing-manual-232336dc0d96#.npgb2r5nn
http://gaearon.github.io/react-hot-loader/getstarted/*/
module.exports = {
	devtool: inProductionMode ? undefined : 'cheap-module-eval-source-map',
	entry: inProductionMode ? {
        bundle: './app/index.js',
        vendor: ['react', 'react-dom', 'react-redux', 'redux', 'redux-persist', 'redux-thunk']
    } : [
		'webpack-dev-server/client?http://localhost:8080', // <-- Enables websocket connection (needs url and port)
		'webpack/hot/only-dev-server', // <-- to perform HMR in the browser; "only" prevents reload on syntax errors
		'./app/index.js' // The appʼs entry point
	],
	output: {
		path: path.join(__dirname, 'build'),
		filename: inProductionMode ? '[name].[chunkhash].js' : 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				// include: path.join(__dirname, app) <-- right now there's no app folder
				use: ['react-hot-loader', 'babel-loader']
			},
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader' },
                        { loader: 'sass-loader' }
                    ]
                })
            }
		]
	},
    resolve: {
        extensions: ['.json', '.jsx', '.js']
    },
	plugins,
	devServer: {
		hot: true, // <-- Enables HMR in webpack-dev-server and in libs running in the browser
		contentBase: './app'
	}
};