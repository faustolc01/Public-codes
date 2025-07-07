

export class AddCustomerPage{

    addCustomerDetails(){
        cy.url().should('include', '/#/manager/addCust') 
        cy.contains('label', 'First Name')
        cy.get('[placeholder="First Name"]')
        cy.contains('label', 'Last Name')
        cy.get('[placeholder="Last Name"]')
        cy.contains('label', 'Post Code')
        cy.get('[placeholder="Post Code"]')
        cy.contains('button[type="submit"]', 'Add Customer')
    }

    addCustomer(firstName, LastName, PostCode){
        cy.get('[placeholder="First Name"]').type(firstName)
        cy.get('[placeholder="Last Name"]').type(LastName)
        cy.get('[placeholder="Post Code"]').type(PostCode)
        const stub = cy.stub()
        cy.on('window:alert', stub)
        cy.contains('button[type="submit"]', 'Add Customer').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Customer added successfully with customer id :6')
            cy.on('window:alert', () => true)
        })
    }

    addDuplicatedCustomer(firstName, LastName, PostCode){
        cy.get('[placeholder="First Name"]').type(firstName)
        cy.get('[placeholder="Last Name"]').type(LastName)
        cy.get('[placeholder="Post Code"]').type(PostCode)
        const stub = cy.stub()
        cy.on('window:alert', stub)
        cy.contains('button[type="submit"]', 'Add Customer').click().then(() => {
            expect(stub.getCall(1)).to.be.calledWith('Please check the details. Customer may be duplicate.')
            cy.on('window:alert', () => true)
        })        
    }
}


export const onAddCustomerPage = new AddCustomerPage()