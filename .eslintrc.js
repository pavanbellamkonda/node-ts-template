module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'jest'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jest/recommended'
	],
	rules: {
		quotes: ['warn', 'single'],
		indent: ['warn', 2],
		'@typescript-eslint/no-use-before-define': 'off'
	},
	globals: {
		module: 'writable'
	}
};
