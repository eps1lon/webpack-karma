const playwright = require("playwright");
process.env.CHROME_BIN = playwright.chromium.executablePath();

module.exports = function setKarmaConfig(karmaConfig) {
  const config = {
    basePath: "../",
    browsers: ["chromeHeadless"],
    frameworks: ["mocha", "webpack"],
    files: [{ pattern: "test/karma.tests.js", watched: false }],
    plugins: ["karma-mocha", "karma-chrome-launcher", "karma-webpack"],
    /**
     * possible values:
     * - config.LOG_DISABLE
     * - config.LOG_ERROR
     * - config.LOG_WARN
     * - config.LOG_INFO
     * - config.LOG_DEBUG
     */
    logLevel: karmaConfig.LOG_INFO,
    port: 9876,
    preprocessors: {
      "test/karma.tests.js": ["webpack"],
    },
    customLaunchers: {
      chromeHeadless: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox"],
      },
    },
  };

  karmaConfig.set(config);
};
