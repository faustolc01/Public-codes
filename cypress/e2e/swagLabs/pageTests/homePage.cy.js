import { onHomePage } from '../../../support/swagLabsPageObjects/homePage.cy.js';

    describe('Home Page Tests', () => {
        beforeEach(() => {
            cy.visit('https://www.saucedemo.com/');        
        });

        it('should display the logo', () => {
            onHomePage.homePageTitle('Swag Labs');
        });

        it('should verify the login fields are visible', () => {
            onHomePage.verifyFields();
        });

        it('should verify the login button is visible', () => {
            onHomePage.verifyLoginButton();
        });

        it('should verify the login credentials wrapper is visible', () => {
            onHomePage.verifyLoginCredentialsWrapper();
        });

        it('should verify the username field is visible', () => {
            onHomePage.verifyUserNameField();
        });

        it('should verify the password field is visible', () => {
            onHomePage.verifyPasswordField();
        });

        it('should verify the login button text is "Login"', () => {
            onHomePage.verifyLoginButtonText('Login');
        });

        it('should login with valid invalid credentials', () => {
            onHomePage.verifyLogin('standard_user', 'wrong_password');
            onHomePage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
        });

        it('should login with valid credentials', () => {
            onHomePage.verifyLogin('standard_user', 'secret_sauce');
            cy.url().should('include', '/inventory.html');
        });

    });