class inventoryPage {
    elements = {
        titleSpan: () => cy.get('.title'),
        robotImg: () => cy.get('#page_wrapper > footer > img')
    }

}

module.exports = new inventoryPage();