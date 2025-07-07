import { onAddCustomerPage } from '../../support/pageObjects/addCustomerPage'
import { onOpenAccountPage } from '../../support/pageObjects/openAccountPage'
import { onBankManagerLoginPage } from '../../support/pageObjects/managerPage'
import { onShowCustomersPage } from '../../support/pageObjects/showCustomersPage'
describe('Bank Manager Login', () =>  {

    beforeEach('verify Bank Manager Login Page', () => {
        cy.openHomePage()
        onBankManagerLoginPage.bankManagerLoginPage()
    })

    it('open page', () => {
        onBankManagerLoginPage.openBankManagerPage('Customers')
    })

    it('verify Add Customer Page details', () => {
        onBankManagerLoginPage.openBankManagerPage('Add Customer')
        onAddCustomerPage.addCustomerDetails()
    })

    it('add customer', () => {
        onBankManagerLoginPage.openBankManagerPage('Add Customer')
        onAddCustomerPage.addCustomer('Fausto', 'Cavalcante', '13101181')
    })

    it('verify Open Account Page details', () => {
        onBankManagerLoginPage.openBankManagerPage('Open Account')
        onOpenAccountPage.openAccountDetails()
    })

    it('open customer account', () => {
        onBankManagerLoginPage.openBankManagerPage('Open Account')
        onOpenAccountPage.openAccountByNameAndCurrency('Harry Potter', 'Dollar')
    })

    it('verify Show Customers Page details', () => {
        onBankManagerLoginPage.openBankManagerPage('Customers')
        onShowCustomersPage.showCustomersDetailsPage()
    })

    it('search for customer and delete it', () => {
        onBankManagerLoginPage.openBankManagerPage('Customers')
        onShowCustomersPage.searchForCustomerAndDeleteIt('Harry', 'Potter', 'E725JB')
    })

    it('add duplicated customer', () => {
        onBankManagerLoginPage.openBankManagerPage('Add Customer')
        onAddCustomerPage.addCustomer('Fausto', 'Cavalcante', '13101181')
        onAddCustomerPage.addDuplicatedCustomer('Fausto', 'Cavalcante', '13101181')
    })

    it('add customer, delete it and add it again', () => {
        onBankManagerLoginPage.openBankManagerPage('Add Customer')
        onAddCustomerPage.addCustomer('Fausto', 'Cavalcante', '13101181')
        onBankManagerLoginPage.openBankManagerPage('Customers')
        onShowCustomersPage.searchForCustomerAndDeleteIt('Fausto', 'Cavalcante', '13101181')
        onBankManagerLoginPage.openBankManagerPage('Add Customer')
        onAddCustomerPage.addCustomer('Fausto', 'Cavalcante', '13101181')
    })
})

describe('Bank Manager Login - Add Customer, Open Account and Check Customer details', () =>  {

    beforeEach('open Bank Manager page', () => {
        cy.openHomePage()
        onBankManagerLoginPage.bankManagerLoginPage()        
    })

    it('verify new customer details', () => {
        onBankManagerLoginPage.openBankManagerPage('Add Customer')
        onAddCustomerPage.addCustomer('Fausto', 'Cavalcante', '13101181')
        onBankManagerLoginPage.openBankManagerPage('Open Account')
        onOpenAccountPage.openAccountByNameAndCurrency('Fausto Cavalcante', 'Dollar')
        onBankManagerLoginPage.openBankManagerPage('Customers')
        onShowCustomersPage.searchForCustomerAndDeleteIt('Fausto', 'Cavalcante', '13101181')
    })


})