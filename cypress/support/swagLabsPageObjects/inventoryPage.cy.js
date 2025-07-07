export class InventoryPage {

    verifyProductList() {
        cy.get('.inventory_list').should('be.visible');
    }

    verifyProductItemCount(count) {
        cy.get('.inventory_item').should('have.length', count);
    }

    verifyProductItemVisible(productName) {
        cy.get('.inventory_item').eq(0).contains(productName).should('be.visible');       
    }

    verifyProductImageVisible(productName) {
        cy.get('.inventory_item').eq(0).contains(productName).parents('.inventory_item').find('.inventory_item_img').should('be.visible');
    }

    verifyProductDescription(description) {
        cy.get('.inventory_item_desc').eq(0).should('have.text', description);            
    }

    verifyProductName(name) {
        cy.get('.inventory_item_name').eq(0).should('have.text', name);
    }

    verifyProductPrice(price) {
        cy.get('.inventory_item_price').eq(0).should('have.text', price);
    }

    addToCart(productName) {
        cy.contains(productName).parents('.inventory_item').find('.btn_inventory').click();
    }

    openCart() {
        cy.get('.shopping_cart_link').click();
    }

    verifyCartItemCount(count) {
        cy.get('.shopping_cart_badge').should('have.text', count);
    }

    verifyCartItem(productName) {
        cy.get('.cart_item').contains(productName).should('be.visible');
    }

    removeFromCart(productName) {
        cy.contains(productName).parents('.cart_item').find('.btn_secondary').click();
    }

    verifyEmptyCart() {
        cy.get('.cart_item').should('not.exist');
    }

    verifyContinueShoppingButton() {
        cy.get('#continue-shopping').should('be.visible');
        cy.get('#continue-shopping').should('not.be.disabled');     
        cy.get('#continue-shopping').should('have.text', 'Continue Shopping');
        cy.get('#continue-shopping').click();
    }

    verifyCheckoutButton() {
        cy.get('.btn_action').should('be.visible');  
        cy.get('.btn_action').should('not.be.disabled');
    }


    proceedToCheckout() {
        cy.get('.btn_action').click();
    }   

    verifyCheckoutPage() {
        cy.get('.checkout_info').should('be.visible');
    }

}

export const onInventoryPage = new InventoryPage();
