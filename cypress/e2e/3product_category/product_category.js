import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import productCategories from "../../../pageObjects/productCategoryPOM";

const Category = new productCategories();
let cookiesAccepted=false;
Given('User visits mobility marketplace',()=>
{
   cy.homePage()
   if(!cookiesAccepted){
    cy.get(':nth-child(4) > .MuiButton-text').click();
    cookiesAccepted=true;

   }
})
When('User mouseover on Services',()=>
{
    Category.mouseoverServices();
})

Then('Services menu is displayed',()=>
{
    Category.invokeDisplay();
})

And ('all the sub-categories under Services should be visible',()=>{
    // dataTable.hashes().forEach((element) => {
    //     cy.get(`p:contains(${element.services})`).should('be.visible');
    // })
    const servicessubCategories = Cypress.env('servicesCategories');
    servicessubCategories.forEach((subCategory) => {
      cy.get(`p:contains(${subCategory})`).should('be.visible');
    });
})

When('User mouseover on Workflows',()=>
{
    Category.mouseoverWorkflows();

})

Then('Workflows menu is displayed',()=>
{
    Category.invokeDisplay();
})

And('all the sub-categories under Workflows should be visible',(dataTable)=>{
    const workflowsubCategories = Cypress.env('workflowCategories');
    workflowsubCategories.forEach((subCategory) => {
        cy.get(`p:contains(${subCategory})`).should('be.visible');
    });
})

When('User mouseover on Frameworks',()=>{
    Category.mouseoverFrameworks();
})
Then('frameworks menu is displayed',()=>{
    Category.invokeDisplay();
})
And('all the sub-categories under Frameworks should be visible',(dataTable)=>{
    const frameworksubCategories = Cypress.env('frameworkCategories');
    frameworksubCategories.forEach((subCategory) => {
        cy.get(`p:contains(${subCategory})`).should('be.visible');
    });

})