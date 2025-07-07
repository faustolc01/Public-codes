import { AddCustomerPage } from "./addCustomerPage"
import { OpenAccountPage } from "./openAccountPage"
import { ShowCustomersPage } from "./showCustomersPage"

const addCustomerBtn = ('[ng-click="addCust()"]')
const openAccountBtn = ('[ng-click="openAccount()"]')
const showCustomersBtn = ('[ng-click="showCust()"]')
const homeBtn = ('[ng-click="home()"]')


export class BankManagerLogin{

    

    bankManagerLoginPage(){
        cy.get('[ng-click="manager()"]').click()
        cy.url().should('include', '/#/manager')        
    }

    managerPageDetails(){
        cy.get('.mainHeading').contains('XYZ Bank')
        cy.get(homeBtn)
        cy.get(addCustomerBtn)
        cy.get(openAccountBtn)
        cy.get(showCustomersBtn)  
    }

    openBankManagerPage(bankManagerPage) {     
        cy.get('div.center').find('button').then(button =>{
            cy.wrap(button).contains(bankManagerPage).click()            
        })       
        if(bankManagerPage == 'Add Customer'){
            return new AddCustomerPage()
        }else if(bankManagerPage == 'Open Account'){
            return new OpenAccountPage()
        }else if(bankManagerPage == 'Customers'){
            return new ShowCustomersPage()
        }       
    }    
}

export const onBankManagerLoginPage = new BankManagerLogin()