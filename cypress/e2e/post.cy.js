context('Testing the posts', () => {

  const likeClasses = ['mdi-heart', 'mdi-cards-heart-outline']
  let likeClass = ''
  let likeStatus = false

  beforeEach(() => {
    cy.visit(Cypress.env('homePage'));
  })

  it('Test posts content', () => {
    cy.get('[data-cy="post-preview"]').eq(1).as('post')
    cy.get('@post').should('have.length.greaterThan', 0)
    cy.get('@post').find('[data-cy="post-like"]').should('exist')
    cy.get('@post').find('[data-cy="post-title"]').should('exist')
    cy.get('@post').find('[data-cy="post-content"]').should('exist')
  })

  it('Test like flow', () => {
    cy.get('[data-cy="post-like"]').eq(0).as('like')
    cy.get('@like').find('i').should('have.class', 'mdi')
    cy.get('@like').find('i').should(($i) => {
      const className = $i[0].className
      likeClass = className.includes(likeClasses[0]) ? likeClasses [1] : likeClasses[0]
      likeStatus = !className.includes(likeClasses[0])
    })

    cy.fixture('post').then((post) => {
      post.like = likeStatus
      cy.intercept('/posts/*', post).as('putLike')
    })

    cy.intercept('@putLike',
      {fixture: 'post.json'}
    )
    cy.get('@like').click()
    cy.wait(1000)
    cy.get('@like').find('i').should(($i) => {
      const className = $i[0].className
      expect(className).contains(likeClass)
    })
  })
})
