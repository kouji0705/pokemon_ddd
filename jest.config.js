/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	moduleNameMapper: {
		"^@entities/(.*)$": "<rootDir>/src/entities/$1",
		"^@enums/(.*)$": "<rootDir>/src/enums/$1",
	},
};
