const path = require('path')

module.exports = {
	async rewrites() {
		return [
			{
				source: '/profile',
				destination: '/account'
			}
		]
	},
	distDir: 'dist',
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		cssModules: true,
		prependData: `@import "mixin/mixins";`
	}
	// basePath: '/project'
}
