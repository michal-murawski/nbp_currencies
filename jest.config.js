module.exports = {
  "setupTestFrameworkScriptFile": "<rootDir>/internals/test-bundler.js",
  "unmockedModulePathPatterns": [
    "react",
    "enzyme",
    "jest-enzyme"
  ],
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,mjs}",
    "!src/**/*.test.{js,jsx}",
    "!src/**/styles.{js,jsx}",
    "!src/index.js",
    "!<rootDir>/node_modules/"
  ],
  "coverageThreshold": {
    "global": {
      "statements": 0,
      "branches": 0,
      "functions": 0,
      "lines": 0
    }
  },
  "setupFiles": [
    "<rootDir>/config/polyfills.js"
  ],
  "testMatch": [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}",
    "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}"
  ],
  "testEnvironment": "node",
  "testURL": "http://localhost",
  "transform": {
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"
  ],
  "moduleNameMapper": {
    "^react-native$": "react-native-web"
  },
  "moduleFileExtensions": [
    "web.js",
    "mjs",
    "js",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ]
}
