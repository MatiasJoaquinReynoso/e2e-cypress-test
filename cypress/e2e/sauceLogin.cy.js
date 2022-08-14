import homePage from '../pages/homePage'
import inventoryPage from '../pages/inventoryPage'

describe("All login scenarios", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");
    });

    it('Standard user login', () => {
        homePage.typeUsername('standard_user')
        homePage.typePassword('secret_sauce')
        homePage.clickLogin()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

});