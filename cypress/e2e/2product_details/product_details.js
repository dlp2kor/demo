import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('user is on Saas page',()=>
{
    cy.visit('/'+ 'saas')
    // .get('.category_button-view__w85sF > .MuiButtonBase-root').click()
})
When('user clicks on the {string} product and {string} of product',(productName,buttons)=>
{
    cy.wait(5000)
    cy.get('button').contains('Explore All').should('be.visible').click().wait(5000).then(()=>{
        cy.url().should('eq','https://qa-tools.mobilitymarketplace.io/saas/listing',{timeout:10000})
        cy.get(`h6[aria-label="${productName}"]`).should('exist')
        cy.get(`${buttons}`).click()

    })
})

Then('user should be able to see {string} page',(productOverview)=>
{
    cy.url().should('eq',productOverview,{timeout:20000}).then((url)=>{
        if(url.includes('#overview')){
            cy.log("Overview of project is displayed")
        }
        else{
            cy.log("No overview shown")
        }
    })
})

And('user navigates to {string} page',(productPricing)=>{
    cy.wait(25000)
    cy.get('button[aria-selected="false"]').click().should('have.text','Pricing')
    cy.url().should('eq',productPricing).then((url)=>{
        if(url.includes('#pricing')){
            cy.get('a[role="button"]').should('have.text', 'View Details').click()
        }
        else{
            cy.log("No pricing details shown")
        }
    })

})

//PAAS

Given('user is on Paas page',()=>
{
    cy.visit('/'+ 'paas').wait(15000)
    // .get('.category_button-view__w85sF > .MuiButtonBase-root').click()
})
When('user clicks on the {string} product and {string} of product',(productName,buttons)=>
{
    cy.wait(30000)
    cy.url().should('eq','https://qa-tools.mobilitymarketplace.io/paas/listing?asset-type=paas',{timeout:10000})
    cy.get(`h6[aria-label="${productName}"]`).should('exist')
    cy.get(`${buttons}`).click()
})

Then('user should be able to see {string} page',(productOverview)=>
{
    cy.url().should('eq',productOverview,{timeout:20000}).then((url)=>{
        if(url.includes('#overview')){
            cy.log("Overview of project is displayed")
        }
        else{
            cy.log("No overview shown")
        }
    })
})

And('user navigates to {string} page',(productPricing)=>{
    cy.wait(25000)
    cy.get('button[aria-selected="false"]').click().should('have.text','Pricing')
    cy.url().should('eq',productPricing).then((url)=>{
        if(url.includes('#pricing')){
            cy.get('a[role="button"]').should('have.text', 'View Details').click()
        }
        else{
            cy.log("No pricing details shown")
        }
    })

})