const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.alibaba.ir/#d-auth',
    specPattern: 'cypress/e2e/**/*.feature',
    setupNodeEvents(on, config) {
      // Ensure bundler is configured correctly
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
      // Add cucumber preprocessor plugin
      addCucumberPreprocessorPlugin(on, config);
      return config;
    },
  },
  // Path for step definitions (remove this from the root and place inside e2e)
  stepDefinitions: 'cypress/support/step_definitions/**/*.ts',
});