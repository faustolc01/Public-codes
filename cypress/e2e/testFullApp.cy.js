/// <reference types="cypress" />

import { onAddCustomerPage } from '../support/pageObjects/addCustomerPage'
import { onCustomerPage } from '../support/pageObjects/customerLoginPage'

import { onBankManagerLoginPage } from '../support/pageObjects/managerPage'
import { onOpenAccountPage } from '../support/pageObjects/openAccountPage'
import { onShowCustomersPage } from '../support/pageObjects/showCustomersPage'

import { onHomePage } from '../support/pageObjects/homePage'

describe('Home Page', () => {
    
    beforeEach('openHomePage', () => {
        cy.openHomePage()
    })

    it('verify home page title', () => {
        onHomePage.homePageTitle('XYZ Bank')        
    })

    it('verify buttons', () => {
        onHomePage.verifyButtons('Home')
        onHomePage.verifyButtons('Customer Login')
        onHomePage.verifyButtons('Bank Manager Login')
    })
    
})


describe('Customer Login', () =>  {

    beforeEach('verify Customer Login Page', () => {
        cy.openHomePage()
        onCustomerPage.customerLoginPage()
        onCustomerPage.customerLoginByName('Harry Potter') 
    })    

    it('verify Customer logout', () => {
        onCustomerPage.customerLogout() 
    })

    it('verify account details', () => {
        onCustomerPage.getAccountDetails('1005')
    })

    it('verify customer account page details', () => {
        onCustomerPage.customerDetails('1004')
    })

    it('verify deposit', () => {
        onCustomerPage.verifyDeposit('1500')
    })

    it('verify deposit and withdrawl', () => {
        onCustomerPage.verifyDeposit('1500')
        onCustomerPage.verifyWithdrawl('1000')
    })

})

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