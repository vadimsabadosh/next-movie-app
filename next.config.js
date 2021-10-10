const path = require('path')

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		cssModules: true,
		prependData: `@import "mixin/mixins";`
	}
}
