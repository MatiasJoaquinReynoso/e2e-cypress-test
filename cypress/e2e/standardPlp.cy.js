import homePage from '../pages/homePage'
import inventoryPage from '../pages/inventoryPage'

describe("All login scenarios", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
        homePage.typeUsername('standard_user')
        homePage.typePassword('secret_sauce')
        homePage.clickLogin()
    });

    it('Testing PLP url', () => {
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })
    it('Testing PLP Title', () => {
        cy.get('.title').should('have.text', 'Products')
    })
})