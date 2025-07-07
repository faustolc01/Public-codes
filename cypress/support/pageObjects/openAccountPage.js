export class OpenAccountPage{

    openAccountDetails(){
        cy.url().should('include', '/#/manager/openAccount') 
        cy.contains('label', 'Customer :')
        cy.get('#userSelect').contains('---Customer Name---')
        cy.contains('label', 'Currency :')
        cy.get('#currency').contains('---Currency---')
        cy.contains('button[type="submit"]', 'Process')
    }

    openAccountByNameAndCurrency(customerName, currency){
        cy.get('#userSelect').select(customerName)
        cy.get('#currency').select(currency) 
        cy.contains('button[type="submit"]', 'Process').click()        
    }
}


export const onOpenAccountPage = new OpenAccountPage()