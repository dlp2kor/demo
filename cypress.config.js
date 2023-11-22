const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");
const { default: preprocessor } = require('cypress-cucumber-preprocessor');
const report = require('multiple-cucumber-html-reporter');

module.exports = defineConfig({
  e2e: { 
    testIsolation:false,
    pageLoadTimeout:80000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
      on('after:run', () => {
        const browser = process.env.BROWSER || 'Unknown';
    report.generate({
      metadata: {
        browser: {
          name: 'Browser',
          value: browser
        },
      },
        jsonDir: 'cypress/reports/cucumber-json',
        reportPath: 'cypress/reports'
        // Add more metadata as needed
    });

    });
  },
  specPattern: "cypress/e2e/*.feature"
},
    env: {
      "servicesCategories": ["APIs","SaaS","PaaS","IaaS"],
      "workflowCategories":["Pre Defined Workflow","Custom Workflow"],
      "frameworkCategories":["Methods"]
    }
  })