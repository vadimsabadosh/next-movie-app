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
	},
	env: {
		NEXT_PUBLIC_API_URL: 'http://localhost:8000/graphql/',
		// NEXT_PUBLIC_API_URL: 'https://radiant-oasis-74595.herokuapp.com/graphql'
	}
}
