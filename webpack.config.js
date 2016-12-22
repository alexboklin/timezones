const webpack = require('webpack');

const dotenv = require('dotenv');
const dotEnvConfig = dotenv.config();
const dotEnvVars = Object.keys(dotEnvConfig).
	reduce( (acc, key) => {
		acc[key] = JSON.stringify(dotEnvConfig[key]);
		return acc;
}, {
	NODE_ENV: JSON.stringify(process.env.NODE_ENV)
});

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

// Check https://webpack.github.io/docs/configuration.html for more info on the subject.
module.exports = {
	devtool: '#eval-source-map',
	entry: [
		'./app/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: 'index_bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
		          presets: ['react', 'es2015', 'stage-0']
		        }
			},
            {
                include: /\.json$/, loaders: ["json-loader"]
            }
		]
	},
    resolve: {
        extensions: ['', '.json', '.jsx', '.js']
    },
	plugins: [
	    HtmlWebpackPluginConfig,
        new webpack.DefinePlugin({'process.env': dotEnvVars})
    ]
};

// TODO: an example to consider, remove when done.
// const dotEnvVars = dotenv.config();
// const environmentEnv = dotenv.config({
// 	path: path.join(root, 'config', `${NODE_ENV}.config.js`),
// 	silent: true,
// });
// const envVariables =
// 	Object.assign({}, dotEnvVars, environmentEnv);
//
// const defines =
// 	Object.keys(envVariables)
// 		.reduce((memo, key) => {
// 			const val = JSON.stringify(envVariables[key]);
// 			memo[`__${key.toUpperCase()}__`] = val;
// 			return memo;
// 		}, {
// 			__NODE_ENV__: JSON.stringify(NODE_ENV)
// 		});
//
// config.plugins = [
// 	new webpack.DefinePlugin(defines)
// ].concat(config.plugins);
//
// module.exports = config;