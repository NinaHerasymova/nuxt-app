context('Testing the posts', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('homePage'));
  })

  it('Test posts content', () => {
    cy.get('[data-cy="post-preview"]').eq(0).as('post')
    cy.get('@post').should('exist')
    cy.get('@post').find('[data-cy="post-like"]').should('exist')
    cy.get('@post').find('[data-cy="post-title"]').should('exist')
    cy.get('@post').find('[data-cy="post-content"]').should('exist')
  })

  // it('Test like flow', () => {
  //   cy.get('[data-cy="post-like"]').eq(0).as('like')
  //   cy.get('@like').find('i').should('have.class', 'mdi')
  //   cy.get('@like').click().wait(1000)
  //   cy.get('@like').find('i').should('have.class', 'mdi-heart')
  // })

  // it('Test like flow', () => {
  //   cy.get('[data-cy="post-like"]').eq(0).as('like')
  //   cy.get('@like').find('i').should('have.class', 'mdi')
  //
  //   cy.intercept('PUT', '/posts/*', { fixture: 'post_static' })
  //
  //   cy.get('@like').click().wait(1000)
  //   cy.get('@like').find('i').should('have.class', 'mdi-heart')
  // })
})
