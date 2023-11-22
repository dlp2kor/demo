// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('homePage',()=>{

const homepageUrl = 'http://qa-sp.docs-dev.bosch-fsde.com/'
  cy.visit(homepageUrl).then(()=>{
    cy.url().should('eq', homepageUrl).then(()=>{
        cy.get('span').contains('BEST Sharing Platform').should('be.visible').then(()=>{
          const searchCategory = ['Services', 'Workflows', 'Frameworks'];
          searchCategory.forEach((text) => {
            cy.contains(text).should('be.visible');
});
        })
    })

  })
})