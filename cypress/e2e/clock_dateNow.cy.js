context('test clock function', () => {

  it('Test dateNow', () => {
    const now = Date.now()
    cy.visit(Cypress.env('homePage'))
      .get('[data-cy="banner"]')
      .find('span')
      .eq(2)
      .should('have.text', now)
  })
  // it('Test dateNow', () => {
  //   const now = Date.now()
  //   cy.clock(now)
  //     .visit(Cypress.env('homePage'))
  //     .get('[data-cy="banner"]')
  //     .find('span')
  //     .eq(2)
  //     .should('have.text', now)
  // })
})
