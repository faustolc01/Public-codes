import { onCheckoutPage } from "../../../support/swagLabsPageObjects/checkoutPage.cy";
import { onHomePage } from '../../../support/swagLabsPageObjects/homePage.cy.js';
import { onInventoryPage } from '../../../support/swagLabsPageObjects/inventoryPage.cy.js';

describe('Inventory Page Tests', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        onHomePage.verifyLogin('standard_user', 'secret_sauce');
        onInventoryPage.addToCart('Sauce Labs Backpack');
        onInventoryPage.openCart();
        onInventoryPage.verifyCartItemCount(1);
        onInventoryPage.proceedToCheckout();
        cy.url().should('include', '/checkout-step-one.html');
        onCheckoutPage.enterFirstName('John');
        onCheckoutPage.enterLastName('Doe');
        onCheckoutPage.enterPostalCode('12345');
        onCheckoutPage.clickContinue();
        onCheckoutPage.verifyCheckoutOverviewPage();
    });

    it('should verify checkout overview page item count', () => {
        onCheckoutPage.verifyCheckoutOverviewItemCount(1);
    });
    it('should verify checkout overview page item visibility', () => {
        onCheckoutPage.verifyCheckoutOverviewItemVisible('Sauce Labs Backpack');
    });
    it('should verify checkout overview page item price', () => {
        onCheckoutPage.verifyCheckoutOverviewItemPrice('Sauce Labs Backpack', '$29.99');
    });
    it('should verify checkout overview page item description', () => {
        onCheckoutPage.verifyCheckoutOverviewItemDescription('Sauce Labs Backpack', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
    });
    it('should verify checkout overview page item name', () => {
        onCheckoutPage.verifyCheckoutOverviewItemName('Sauce Labs Backpack');
    });
    it('should verify checkout overview page item price text', () => {
        onCheckoutPage.verifyCheckoutOverviewItemPriceText('$29.99');
    });
    it('should verify checkout overview page tax text', () => {
        onCheckoutPage.verifyCheckoutOverviewTaxText('$2.40');
    });
    it('should verify checkout overview page total text', () => {
        onCheckoutPage.verifyCheckoutOverviewTotalText('$32.39');
    });
    it('should verify checkout overview page finish button', () => {
        onCheckoutPage.verifyCheckoutOverviewFinishButton();
    });
    it('should complete the checkout process', () => {
        onCheckoutPage.clickFinish();
        cy.url().should('include', '/checkout-complete.html');
        onCheckoutPage.verifyOrderConfirmation('Thank you for your order!', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    });
    it('should verify checkout process is completed', () => {
        onCheckoutPage.clickFinish();
        onCheckoutPage.verifyCheckoutOverviewItemCount(0);
        onCheckoutPage.verifyCheckoutCompleted();
        onCheckoutPage.verifyBackHomeButton();
    });



});
