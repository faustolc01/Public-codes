import { onInventoryPage } from "../../../support/swagLabsPageObjects/inventoryPage.cy";
import { onHomePage } from '../../../support/swagLabsPageObjects/homePage.cy.js';

describe('Inventory Page Tests', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        onHomePage.verifyLogin('standard_user', 'secret_sauce');
    });

    it('should display the product list', () => {
        onInventoryPage.verifyProductList();
    });

    it('should verify the number of products', () => {
        onInventoryPage.verifyProductItemCount(6);
    });

    it('should verify the filter options are visible', () => {
        onInventoryPage.verifyFilterOptionsVisible();
    });
    it('should filter products by name (A to Z)', () => {
        onInventoryPage.filterProductsByName('az'); 
        onInventoryPage.verifyProductOrder(['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']);
    });

    it('should filter products by name (Z to A)', () => {
        onInventoryPage.filterProductsByName('za'); 
        onInventoryPage.verifyProductOrder(['Test.allTheThings() T-Shirt (Red)', 'Sauce Labs Onesie', 'Sauce Labs Fleece Jacket', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Bike Light', 'Sauce Labs Backpack']);
    });

    it('should filter products by name (A to Z)', () => {
        onInventoryPage.filterProductsByName('az'); 
        onInventoryPage.verifyProductOrder(['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']);
    });

    it('should verify a specific product is visible', () => {
        onInventoryPage.verifyProductItemVisible('Sauce Labs Backpack');
    });

    it('should verify product image is visible', () => {
        onInventoryPage.verifyProductImageVisible('Sauce Labs Backpack');
    });

    it('should verify product description', () => {
        onInventoryPage.verifyProductDescription('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
    });

    it('should verify product name', () => {
        onInventoryPage.verifyProductName('Sauce Labs Backpack');
    });

    it('should verify product price', () => {
        onInventoryPage.verifyProductPrice('$29.99');
    });

    it('should add a product to the cart', () => {
        onInventoryPage.addToCart('Sauce Labs Backpack');
        onInventoryPage.openCart();
        onInventoryPage.verifyCartItemCount(1);
        onInventoryPage.verifyCartItem('Sauce Labs Backpack');
    });

    it('should remove a product from the cart', () => {
        onInventoryPage.addToCart('Sauce Labs Backpack');
        onInventoryPage.openCart();
        onInventoryPage.verifyCartItemCount(1);
        onInventoryPage.verifyCartItem('Sauce Labs Backpack');
        onInventoryPage.removeFromCart('Sauce Labs Backpack');
        onInventoryPage.verifyEmptyCart();
    });

    it('should proceed to checkout', () => {
        onInventoryPage.addToCart('Sauce Labs Backpack');
        onInventoryPage.openCart();
        onInventoryPage.verifyCartItemCount(1);
        onInventoryPage.proceedToCheckout();
        cy.url().should('include', '/checkout-step-one.html');
    });
});
