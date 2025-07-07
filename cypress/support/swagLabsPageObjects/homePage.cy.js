export class HomePage {

    homePageTitle(title) {
        cy.title().should('include', title);
    }

    verifyFields() {
        cy.get('#user-name').should('be.visible');
        cy.get('#password').should('be.visible');
    }   

    verifyLoginButton(){
        cy.get('#login-button').should('be.visible');
    }
 
    verifyLoginCredentialsWrapper() {
        cy.get('.login_credentials').should('be.visible');
    }

    verifyUserNameField() {
        cy.get('#user-name').should('be.visible');
    }

    verifyPasswordField() {
        cy.get('#password').should('be.visible');
    }   

    verifyLoginButtonText(text) {
        cy.get('#login-button').should('have.value', text);
    }   

    verifyLogin(username, password) {   
        cy.get('#user-name').type(username);
        cy.get('#password').type(password);
        cy.get('#login-button').click();    
        
    }
    
    verifyErrorMessage(message) {
        cy.get('.error-message-container').should('be.visible');
        cy.get('.error-message-container').should('have.text', message);
    }


}

export const onHomePage = new HomePage()