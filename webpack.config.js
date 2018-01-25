const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './dist');
const SRC_DIR = path.resolve(__dirname, './src');

const config = {
	entry: {
		bundle: [
			'babel-polyfill', SRC_DIR + '/index.js'
		]
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: SRC_DIR,
				loader: 'babel-loader'
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'componentville': path.resolve(__dirname, './src'),
			'componentville-theme': path.resolve(__dirname, './src/theme'),
			'componentville-atoms': path.resolve(__dirname, './src/atoms'),
			'componentville-molecules': path.resolve(__dirname, './src/molecules')
		}
	}
};

module.exports = config;
