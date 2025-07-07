
export class ShowCustomersPage{

    showCustomersDetailsPage(){
        cy.url().should('include', '/#/manager/list') 
        cy.get('[ng-model="searchCustomer"]')
        cy.get('table').contains('tr', 'First Name').then(td => {
            cy.wrap(td).find('td').eq(0).contains('First Name')
            cy.wrap(td).find('td').eq(1).contains('Last Name')
            cy.wrap(td).find('td').eq(2).contains('Post Code')
            cy.wrap(td).find('td').eq(3).contains('Account Number')
            cy.wrap(td).find('td').eq(4).contains('Delete Customer')
        })
    }

    searchForCustomerAndDeleteIt(firstName, lastName, postCode){
        cy.get('[ng-model="searchCustomer"]').type(firstName)
        cy.get('table').contains('tr', firstName, lastName, postCode).then(tableRow => {
            cy.wrap(tableRow).find('.ng-binding').contains(firstName)
            cy.wrap(tableRow).find('.ng-binding').contains(lastName)
            cy.wrap(tableRow).find('.ng-binding').contains(postCode)
            cy.wrap(tableRow).find('[ng-click="deleteCust(cust)"]').click()            
        })   
    }
}


export const onShowCustomersPage = new ShowCustomersPage()