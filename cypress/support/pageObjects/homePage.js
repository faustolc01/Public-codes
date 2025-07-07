
export class HomePage {

    homePageTitle(title){
        cy.get('.mainHeading').then( pageTitle => {
            cy.wrap(pageTitle).contains(title)
        })
    }

    verifyButtons(button){
        cy.get('button').then( pageBtns => {
            cy.wrap(pageBtns).should('contain', button)           
        })        
    }
}

export const onHomePage = new HomePage()