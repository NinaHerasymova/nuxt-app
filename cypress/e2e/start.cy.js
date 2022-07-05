context('testing the main page', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('homePage'));
  })

  it('Test main page', () => {
    cy.get('[data-cy="title"]').should('have.text', 'Cypress test project')
    cy.get('[data-cy="post-preview"]').should('have.length.greaterThan', 0)
  })
})
