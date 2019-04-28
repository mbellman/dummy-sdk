module.exports = {
	roots: ['./tests/'],
	collectCoverage: true,
	collectCoverageFrom: [
		'./src/**/*.{js,jsx}'
	],
	setupFilesAfterEnv: [
		'dummy-sdk/setupTests'
	],
	transform: {
		"^.+\\.jsx?$": "babel-jest"
	},
	transformIgnorePatterns: [
		'node_modules\/(?!.*dummy-sdk)'
	]
};