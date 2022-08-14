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

    it('Locked out user login', () => {
        homePage.typeUsername('locked_out_user')
        homePage.typePassword('secret_sauce')
        homePage.clickLogin()
        homePage.elements.errorMsg().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    })

    it('Problem user login', () => {
        homePage.typeUsername('problem_user')
        homePage.typePassword('secret_sauce')
        homePage.clickLogin()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

    it('Performance glitch user login', () => {
        homePage.typeUsername('performance_glitch_user')
        homePage.typePassword('secret_sauce')
        homePage.clickLogin()
        cy.wait(5000)
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })


    it('Empty username should be display error', () => {
        cy.get('#user-name').should('have.value', '');
        homePage.typePassword('secret_sauce')
        homePage.clickLogin()
        homePage.elements.errorMsg().should('have.text', 'Epic sadface: Username is required')
    })

    it('Empty password should be display error', () => {
        homePage.typeUsername('standard_user')
        cy.get('#password').should('have.value', '');
        homePage.clickLogin()
        homePage.elements.errorMsg().should('have.text', 'Epic sadface: Password is required')
    })

    it('Invalid password should be display error', () => {
        homePage.typeUsername('standard_user')
        homePage.typePassword('dummy123')
        homePage.clickLogin()
        homePage.elements.errorMsg().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('Invalid username should be display error', () => {
        homePage.typeUsername('dummyuser')
        homePage.typePassword('secret_sauce')
        homePage.clickLogin()
        homePage.elements.errorMsg().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })


});