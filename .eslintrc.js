module.exports = {
	env: {
		browser: true,
		node: true,
		es2020: true
	},
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: ['@typescript-eslint', 'react', 'prettier'],
	extends: [
		'eslint:recommended',
		'airbnb',
		'airbnb/hooks',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended'
	],
	overrides: [
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off'
			}
		}
	],
	rules: {
		'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
		'import/extensions': 'off',
		'react/prop-types': 'off',
		'jsx-a11y/anchor-is-valid': 'off',
		'react/jsx-props-no-spreading': 'off',
		'prettier/prettier': 'error',
		'react/no-unescaped-entities': 'off',
		'import/no-cycle': [0, { ignoreExternal: true }],
		'prefer-const': 'off',
		'no-underscore-dangle': 'off',
		'import/no-unresolved': [2, { commonjs: true }],
		'no-param-reassign': [
			2,
			{
				props: false
			}
		],
		'no-use-before-define': 'off',
		'react/react-in-jsx-scope': 'off',
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'@typescript-eslint/no-use-before-define': [
			'error',
			{ functions: false, classes: false, variables: true }
		],
		'@typescript-eslint/ban-ts-comment': 'off',
		'jsx-a11y/label-has-associated-control': [
			'error',
			{
				required: {
					some: ['nesting', 'id']
				}
			}
		],
		'jsx-a11y/label-has-for': [
			'error',
			{
				required: {
					some: ['nesting', 'id']
				}
			}
		],
		'react/button-has-type': 'off',
		camelcase: 'off',
		'@typescript-eslint/camelcase': 'off'
	},
	settings: {
		'import/resolver': {
			'babel-module': {
				extensions: ['.js', '.jsx', '.ts', '.tsx']
			},
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				paths: ['.']
			}
		}
	}
}
