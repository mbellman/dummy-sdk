module.exports = {
	roots: ['./tests/'],
	collectCoverage: true,
	collectCoverageFrom: [
		'./src/**/*.{js,jsx}'
	],
	setupFilesAfterEnv: [
		'dummy-sdk/setupTests'
	]
};