const path = require('path')

module.exports = {
	distDir: 'dist',
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		cssModules: true,
		prependData: `@import "mixin/mixins";`
	}
}
