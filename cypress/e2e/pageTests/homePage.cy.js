/// <reference types="cypress" />

import { onHomePage } from '../../support/pageObjects/homePage'

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