const transactionsBtn = ('[ng-click="transactions()"]')
const depositBtn = ('[ng-click="deposit()"]')
const withdrawlBtn = ('[ng-click="withdrawl()"]')

export class CustomerPage{
    
    customerLoginPage(){
        cy.get('[ng-click="customer()"]').click()
        cy.url().should('include', '/#/customer')
        cy.contains('label', 'Your Name :')
        cy.get('#userSelect').contains('---Your Name---')
    }

    customerLoginByName(userName){        
        cy.get('#userSelect').select(userName)
        cy.contains('button', 'Login').click()        
        cy.contains('div strong', ' Welcome '+userName+' !!')
    }

    customerLogout(){
        cy.contains('button', 'Logout').click()
        cy.url().should('include', '/#/customer')
    }

    customerDetails(accountNumber){        
        cy.get('.mainHeading').contains('XYZ Bank')
        cy.get('select#accountSelect option:selected').should('have.text', accountNumber)
        cy.get('div[ng-hide="noAccount"] strong').eq(0).then(account => {
            cy.wrap(account).contains(accountNumber)
        })
        cy.get('div[ng-hide="noAccount"] strong').eq(1).then(balance => {
            cy.wrap(balance).should('not.be.null')
        })
        cy.get('div[ng-hide="noAccount"] strong').eq(2).then(currency => {
            cy.wrap(currency).should('not.be.null')  
        })
        cy.get(transactionsBtn)
        cy.get(depositBtn)
        cy.get(withdrawlBtn)        
    }

    getAccountDetails(accountNumber){        
        cy.get('#accountSelect').select(accountNumber)
        cy.get('div[ng-hide="noAccount"] strong').eq(0).contains(accountNumber)
        
    }

    verifyDeposit(depositValue){ 
        cy.get(depositBtn).click()
        cy.get('[ng-submit="deposit()"]').then(deposit => {
            cy.wrap(deposit).find('[ng-model="amount"]').type(depositValue)
            cy.wrap(deposit).find('button[type="submit"]').contains('Deposit').click() 
                      
        })  
        cy.get('div[ng-hide="noAccount"] strong').eq(1).contains(depositValue)  
        cy.contains('[ng-show="message"]', 'Deposit Successful')
    }

    verifyWithdrawl(withdrawlValue){
        cy.get(withdrawlBtn).click()
        cy.get('[ng-submit="withdrawl()"]').then(withdrawl => {
            cy.wrap(withdrawl).find('[ng-model="amount"]').type(withdrawlValue)
            cy.wrap(withdrawl).find('button[type="submit"]').contains('Withdraw').click()                      
        })           
        cy.contains('[ng-show="message"]','Transaction successful')
    }
    
}

export const onCustomerPage = new CustomerPage()