class productCategories{
    mouseoverServices(){
        cy.contains('Services').should('be.visible').realHover('mouse')
    }
    mouseoverWorkflows(){
        cy.contains('Workflows').should('be.visible').realHover('mouse')
    }
    mouseoverFrameworks(){
        cy.contains('Frameworks').should('be.visible').realHover('mouse')
    }
    invokeDisplay(){
        cy.get('.MuiGrid-grid-md-7')
    }
    displayServices(){
        cy.should('match', /Services.*APIs.*SaaS.*PaaS.*IaaS/)
    }
    displayWorkflows(){
        cy.should('match', /Workflows.*Pre Defined Workflow.*Custom Workflow/)
    }
    displayFrameworks(){
        cy.should('match', /Frameworks.*Methods/)
    }   
}
export default productCategories;