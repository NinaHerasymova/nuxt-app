context('Testing auth', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('homePage'));
  })

  it('Test login and logout flow', () => {
    cy.get('[data-cy="logButton"]').as('logButton')
    cy.get('@logButton').should('contain.text', 'Login')
    cy.get('@logButton').click().wait(500)
    cy.get('[data-cy="auth-modal"]').as('authModal')
    cy.get('@authModal').should('be.visible')
    cy.get('@authModal').find(' [data-cy="email"]')
      .type('test@email.com').should('have.value', 'test@email.com')
    cy.get('@authModal').find(' [data-cy="password"]')
      .type('11111111').invoke('val') .should('have.length', 8)
    cy.loginByGoogleApi()
    cy.location('pathname').should('include', 'admin')
    cy.get('@logButton').should('contain.text', 'Logout')
    cy.get('@logButton').click().wait(500)
    cy.get('@authModal').should('be.visible')
    cy.get('@authModal').find(' [data-cy="logout-text"]').should('contain.text', 'Are you sure you want to logout?')
    cy.get('@authModal').find(' [data-cy="logout-button"]').click().wait(500)
    cy.location('pathname').should('not.include', 'admin')
    cy.get('@logButton').should('contain.text', 'Login')
  })
})
