import homePage from '../pages/homePage'

describe('Testing cy log for debuggin', () => {

    it('Cy log', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.log('Enter a username')
        homePage.typeUsername('standard_user')
        cy.log('Enter a password')
        homePage.typePassword('secret_sauce')
        cy.log('Click login button')
        homePage.clickLogin()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })
})