const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    blockHosts: ['events.backtrace.io', '*.backtrace.io'],
  }
});
