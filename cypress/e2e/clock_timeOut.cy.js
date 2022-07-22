context('test clock function', () => {

  // it('Test timeOut', () => {
  //   cy.visit(Cypress.env('homePage'))
  //   .get('[data-cy="banner"]').should('be.visible')
  //   .wait(30000)
  //   .get('[data-cy="banner"]').should('not.be.visible')
  // })
  it('Test timeOut', () => {
    cy.clock()
      .visit(Cypress.env('homePage'))
      .get('[data-cy="banner"]').should('be.visible')
      .tick(30000)
      .get('[data-cy="banner"]').should('not.be.visible')
  })
})
