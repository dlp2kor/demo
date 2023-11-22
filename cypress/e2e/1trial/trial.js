import { Given,Then } from "cypress-cucumber-preprocessor/steps";

Given('user visits mobility marketplace',()=>
{
    cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
    // cy.get(':nth-child(4) > .MuiButton-text').click();
})

Then('user should see available links',()=>
{
    cy.get('a')
})