const mainWebpackConfig = require('../webpack.config');

module.exports = {
	resolve: mainWebpackConfig.resolve,
	module: {
		loaders: [
			...mainWebpackConfig.module.loaders,
		]
	}
};