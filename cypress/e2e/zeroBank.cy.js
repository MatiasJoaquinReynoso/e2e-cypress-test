import homePage from '../pages/homePage'
import inventoryPage from '../pages/inventoryPage'

describe("All login scenarios", () => {
    beforeEach(() => {

        cy.visit("http://zero.webappsecurity.com/");
    });

    it('H4 should be selected', () => {
        cy.get("h4").contains("Online Banking");
    })
});