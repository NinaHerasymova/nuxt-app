context('Testing auth', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('homePage'));
  })

  it('Test admin page route success', () => {
    cy.get('[data-cy="admin"]').as('adminLink')
    cy.get('@adminLink').click()
    cy.wait(500)
    cy.get('[data-cy="auth-modal"]').as('authModal')
    cy.get('@authModal').should('be.visible')
    cy.get('@authModal').find(' [data-cy="email"]')
      .type('test@email.com').should('have.value', 'test@email.com')
    cy.get('@authModal').find(' [data-cy="password"]')
      .type('11111111').invoke('val') .should('have.length', 8)
    cy.loginByGoogleApi()
    cy.location('pathname').should('include', 'admin')
  });
})
