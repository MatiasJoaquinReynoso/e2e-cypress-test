import homePage from '../pages/homePage'
import inventoryPage from '../pages/inventoryPage'

describe("PLP scenarios and Assertions", () => {
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
    it('Testing the name of the first img', () => {
        cy.get('#item_4_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Backpack')
    })
    it('Robot img footer should be visible', () => {
        inventoryPage.elements.robotImg().should('be.visible')
        inventoryPage.elements.robotImg().should('exist')
    })

})
