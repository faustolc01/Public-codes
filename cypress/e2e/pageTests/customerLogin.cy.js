/// <reference types="cypress" />
import { onCustomerPage } from '../../support/pageObjects/customerLoginPage'

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