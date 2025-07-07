export class CheckoutPage {
    verifyCheckoutButton() {
        cy.get('.btn_action').should('be.visible');
        cy.get('.btn_action').should('not.be.disabled');
        cy.get('.btn_action').should('have.text', 'Checkout');
    }

    verifyCheckoutPage() {
        cy.get('.checkout_info').should('be.visible');
    }

    enterFirstName(firstName) {
        cy.get('#first-name').type(firstName);
    }

    enterLastName(lastName) {
        cy.get('#last-name').type(lastName);
    }

    enterPostalCode(postalCode) {
        cy.get('#postal-code').type(postalCode);
    }

    clickContinue() {
        cy.get('.btn_primary').click();
    }

    verifyCheckoutOverviewPage() {
        cy.get('.checkout_summary_container').should('be.visible');
    }
    verifyCheckoutOverviewItemCount(count) {
        cy.get('.cart_item').should('have.length', count);
    }
    verifyCheckoutOverviewItemVisible(itemName) {
        cy.get('.inventory_item_name').contains(itemName).should('be.visible');
    }
    verifyCheckoutOverviewItemPrice(itemName, price) {
        cy.get('.inventory_item_name').contains(itemName)
            .parents('.cart_item_label').find('.inventory_item_price')
            .should('have.text', price);
    }
    verifyCheckoutOverviewItemDescription(itemName, description) {
        cy.get('.inventory_item_name').contains(itemName)
            .parents('.cart_item_label').find('.inventory_item_desc')
            .should('have.text', description);
    }
    verifyCheckoutOverviewItemImageVisible(itemName) {
        cy.get('.inventory_item_name').contains(itemName)
            .parents('.cart_item_label').find('.inventory_item_img')
            .should('be.visible');
    }
    verifyCheckoutOverviewItemName(itemName) {
        cy.get('.inventory_item_name').contains(itemName).should('be.visible');
    }
    verifyCheckoutOverviewItemPriceText(price) {
        cy.get('.summary_subtotal_label').should('have.text', `Item total: ${price}`);
    }
    verifyCheckoutOverviewTaxText(tax) {
        cy.get('.summary_tax_label').should('have.text', `Tax: ${tax}`);
    }
    verifyCheckoutOverviewTotalText(total) {
        cy.get('.summary_total_label').should('have.text', `Total: ${total}`);
    }
    verifyCheckoutOverviewFinishButton() {
        cy.get('.btn_action').should('be.visible');
        cy.get('.btn_action').should('not.be.disabled');
        cy.get('.btn_action').should('have.text', 'Finish');
    }

    clickFinish() {
        cy.get('.btn_action').contains('Finish').click();
    }

    verifyOrderConfirmation(confirmationText, completeText) {
        cy.get('.complete-header').should('have.text', confirmationText);
        cy.get('.complete-text').should('have.text', completeText);
    }

    verifyCheckoutCompleted() {
        cy.get('.checkout_complete_container').should('be.visible');
        cy.get('.title').should('have.text', 'Checkout: Complete!');
    }

    verifyBackHomeButton() {
        cy.get('#back-to-products').should('be.visible');
        cy.get('#back-to-products').should('not.be.disabled');
        cy.get('#back-to-products').should('have.text', 'Back Home');
    }



}

export const onCheckoutPage = new CheckoutPage();