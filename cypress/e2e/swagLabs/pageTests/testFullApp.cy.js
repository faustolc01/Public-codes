import { onHomePage } from '../../../support/swagLabsPageObjects/homePage.cy.js';
import { onInventoryPage } from '../../../support/swagLabsPageObjects/inventoryPage.cy.js';
import { onCheckoutPage } from '../../../support/swagLabsPageObjects/checkoutPage.cy';


describe('Full App Cycle Test', () => {
    it('should complete a full purchase cycle successfully', () => {
        cy.visit('https://www.saucedemo.com/');
        onHomePage.verifyLogin('standard_user', 'secret_sauce');
        cy.url().should('include', '/inventory.html');

        onInventoryPage.addToCart('Sauce Labs Backpack');
        onInventoryPage.verifyCartItemCount(1);
        onInventoryPage.openCart();

        onInventoryPage.proceedToCheckout();
        cy.url().should('include', '/checkout-step-one.html');

        onCheckoutPage.enterFirstName('John');
        onCheckoutPage.enterLastName('Doe');
        onCheckoutPage.enterPostalCode('12345');
        onCheckoutPage.clickContinue();

        onCheckoutPage.verifyCheckoutOverviewPage();
        onCheckoutPage.verifyCheckoutOverviewItemCount(1);
        onCheckoutPage.verifyCheckoutOverviewItemVisible('Sauce Labs Backpack');
        onCheckoutPage.clickFinish();

        cy.url().should('include', '/checkout-complete.html');
        onCheckoutPage.verifyOrderConfirmation(
            'Thank you for your order!',
            'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
        );
    });
});