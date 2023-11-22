import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given ('user is on SaaS listing page',() =>{
    cy.visit('https://qa-tools.mobilitymarketplace.io/saas/listing?asset-type=saas')

})

And('SaaS box is checked',() =>{
    // cy.get('input[type="checkbox"]').filter(':checked')
    cy.get('input[type="checkbox"]').filter(':checked').siblings('label').contains('SaaS').as('saasLabel');

    // Assert that the label 'SaaS' is found and its corresponding checkbox is checked
    cy.get('@saasLabel').should('exist');
    cy.get('@saasLabel').siblings('input[type="checkbox"]').should('be.checked');
})
When ('User clicks on View Details',() =>{
    cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardContent-root > :nth-child(5) > .MuiButtonBase-root').click()
})