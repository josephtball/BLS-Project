var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		app: './client/index.js'
	},
	output: {
		path: path.resolve(__dirname, './public/assets/javascript'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				include: [path.resolve(__dirname, './app/')],
				test: /\.jsx?$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react']
					}
				}
			},
		]
	},
	devtool: 'eval-source-map'
}