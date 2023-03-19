const { merge } = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common.js');
const { PATHS, PORT } = require('./constants');

module.exports = merge(common, {
	mode: 'development',
	output: {
		path: path.join(PATHS.OUTPUT_DIR),
		publicPath: '/',
	},
	devServer: {
		port: PORT,
		historyApiFallback: true,
		devMiddleware: {
			writeToDisk: true,
		},
		client: {
			overlay: {
				warnings: false,
				errors: true,
			},
		},
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers':
				'X-Requested-With, content-type, Authorization',
		},
	},
});
