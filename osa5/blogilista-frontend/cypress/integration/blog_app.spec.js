describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'Blogi Testaaja',
      username: 'Blogitestaaja',
      password: 'aivansalainen'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  // it('front page can be opened', function() {
  //   cy.contains('login')
  //   cy.contains('Log in to application')
  // })

  it('login form can be opened', function() {
    cy.contains('login').click()
  })

  describe('Login',function() {
    it('succeeds with correct credentials', function() {
      cy.contains('login').click()
      cy.get('#username').type('Blogitestaaja')
      cy.get('#password').type('aivansalainen')
      cy.get('#login-button').click()

      cy.contains('Blogi Testaaja logged in')

    })

    it('fails with wrong credentials', function() {
      cy.contains('login').click()
      cy.get('#username').type('Blogitestaaja')
      cy.get('#password').type('wrong')
      cy.get('#login-button').click()

      cy.get('.errorMessage')
        .should('contain', 'wrong username or password')
        .and('have.css', 'color', 'rgb(255, 0, 0)')
        .and('have.css', 'border-style', 'solid')

      cy.get('html').should('not.contain', 'Blogi Testaaja logged in')

    })

  })

})