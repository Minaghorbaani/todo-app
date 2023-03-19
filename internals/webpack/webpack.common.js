const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const { PATHS } = require('./constants');
const manifestConfig = require('../../public/manifest.json');

module.exports = {
	entry: path.join(PATHS.APP_DIR, 'index.js'),
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
	module: {
		rules: [
			{
				test: /\.?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /.(png|jp(e*)g|svg|gif)$/,
				type: 'asset/resource',
			},
			{
				test: /\.(scss|css)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Formaloo Todo',
			template: './public/index.html',
			filename: './index.html',
			favicon: './public/favicon.ico',
			manifest: './public/manifest.json',
		}),

		new InterpolateHtmlPlugin({
			PUBLIC_URL: '',
		}),

		new WebpackPwaManifest(manifestConfig),
	],
	resolve: {
		alias: {
			App: path.join(PATHS.APP_DIR),
			Statics: path.join(PATHS.APP_DIR, 'statics'),
			Components: path.join(PATHS.APP_DIR, 'components'),
			Elements: path.join(PATHS.APP_DIR, 'components', 'Globals', 'Elements'),
			Config: path.join(PATHS.APP_DIR, 'config'),
			Constants: path.join(PATHS.APP_DIR, 'constants'),
			Ducks: path.join(PATHS.APP_DIR, 'ducks'),
			Helpers: path.join(PATHS.APP_DIR, 'helpers'),
			Hooks: path.join(PATHS.APP_DIR, 'hooks'),
			Pages: path.join(PATHS.APP_DIR, 'pages'),
			Router: path.join(PATHS.APP_DIR, 'router'),
			Routes: path.join(PATHS.APP_DIR, 'pages/router/constants/routes'),
		},
	},
};
