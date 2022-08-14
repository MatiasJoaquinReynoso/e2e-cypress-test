import homePage from '../pages/homePage'
import inventoryPage from '../pages/inventoryPage'

describe("All login scenarios", () => {
    beforeEach(() => {

        cy.visit("http://zero.webappsecurity.com/");
    });

    it('H4 should be selected', () => {
        cy.get("h4").contains("Online Banking");
    })
    it('Sign in button', () => {
        cy.get('#signin_button').click();
    })
    it('Testing inputs commands', () => {
        cy.get('#signin_button').click();
        cy.get('input').first().type('username')
        cy.get('input').eq(1).type('password')
    })
});