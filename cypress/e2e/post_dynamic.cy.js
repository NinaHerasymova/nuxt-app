context('Testing the posts', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('homePage'));
  })

  it('Test like flow', () => {
    const likeClasses = ['mdi-heart', 'mdi-cards-heart-outline']
    let likeClass
    let likeStatus
    cy.get('[data-cy="post-like"]').eq(0).as('like')
    cy.get('@like').find('i').should('have.class', 'mdi')
    cy.get('@like').find('i').should(($i) => {
      const className = $i[0].className
      likeClass = className.includes(likeClasses[0]) ? likeClasses [1] : likeClasses[0]
      likeStatus = !className.includes(likeClasses[0])
    })

    cy.fixture('post_dynamic').then((post) => {
      post.like = likeStatus
      cy.intercept('PUT', '/posts/*', post).as('putLike')
    })

    cy.get('@like').click().wait(1000)
    cy.get('@like').find('i').should(($i) => {
      const className = $i[0].className
      expect(className).contains(likeClass)
    })
  })
})
