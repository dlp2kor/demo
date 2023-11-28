const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");
const { default: preprocessor } = require('cypress-cucumber-preprocessor');
const report = require('multiple-cucumber-html-reporter');

module.exports = defineConfig({
  e2e: { 
    testIsolation: false,
    pageLoadTimeout: 80000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber());
      on('after:run', (results) => {
        try {
          if (results && results.totalFailed > 0) {
            // Get the browser parameter from the environment
            // const browser = process.env.BROWSER || 'Unknown';
    
            // Generate the HTML report after the test run
            report.generate({
              // Configuration options, customize as needed
              // ...
              metadata: {
                'Browser': process.env.BROWSER || 'not specified', // Use BROWSER environment variable or default to 'Not specified'
                'Platform': 'Docker'
                // Add more metadata as needed
              },
              jsonDir: 'cypress/reports/cucumber-json',
              reportPath: 'cypress/reports'
            });
          } else {
            console.log('No failed tests. Skipping report generation.');
          }
        } catch (error) {
          console.error('Error during report generation:', error);
        }
      }); // Closing parenthesis for on('after:run'
      // Add more metadata as needed
    },
  specPattern: "cypress/e2e/*.feature"
  },
  env: {
    "servicesCategories": ["APIs", "SaaS", "PaaS", "IaaS"],
    "workflowCategories": ["Pre Defined Workflow", "Custom Workflow"],
    "frameworkCategories": ["Methods"]
  }
});