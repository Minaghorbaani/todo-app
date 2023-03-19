const path = require('path');

module.exports = {
	PORT: 3002,
	PATHS: {
		PUBLIC_DIR: '/',
		APP_DIR: path.join(process.cwd(), 'src/'),
		BUILD_DIR: path.join(process.cwd(), 'dist'),
		OUTPUT_DIR: path.join(process.cwd(), 'dist'),
	},
};
