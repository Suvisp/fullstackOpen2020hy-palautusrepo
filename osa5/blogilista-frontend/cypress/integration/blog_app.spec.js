Cypress.Commands.add('login', ({ username, password }) => {
  cy.request('POST', 'http://localhost:3003/api/login', {
    username, password
  }).then(({ body }) => {
    localStorage.setItem('loggedBlogappUser', JSON.stringify(body))
    cy.visit('http://localhost:3000')
  })
})

Cypress.Commands.add('addBlog', ({ title, author, url, likes }) => {
  cy.request({
    url: 'http://localhost:3003/api/blogs',
    method: 'POST',
    body: { title, author, url, likes },
    headers: {
      'Authorization': `bearer ${JSON.parse(localStorage.getItem('loggedBlogappUser')).token}`
    }
  })
  cy.visit('http://localhost:3000')
})

describe('Blog app', function () {
  beforeEach(function () {
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

  it('login form can be opened', function () {
    cy.contains('login').click()
  })

  describe('Login', function () {
    it('succeeds with correct credentials', function () {
      cy.contains('login').click()
      cy.get('#username').type('Blogitestaaja')
      cy.get('#password').type('aivansalainen')
      cy.get('#login-button').click()

      cy.contains('Blogi Testaaja logged in')

    })

    it('fails with wrong credentials', function () {
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

  describe.only('When logged in', function () {
    beforeEach(function () {
      // cy.login({ username: 'Blogitestaaja', password: 'aivansalainen' })
      cy.request('POST', 'http://localhost:3003/api/login', {
        username: 'Blogitestaaja', password: 'aivansalainen'
      }).then(response => {
        localStorage.setItem('loggedBlogappUser', JSON.stringify(response.body))
        cy.visit('http://localhost:3000')
      })
    })

    it('A blog can be created', function () {
      cy.contains('new blog').click()
      // cy.get('input').type('a blog created by cypress')
      cy.get('#title').type('Cypress blogi')
      cy.get('#author').type('Cypress fanittaja')
      cy.get('#url').type('www.cypressfanittajanblogi.fi')
      cy.contains('save').click()
      cy.contains('Cypress blogi')
    })

    describe('and several blogs exist', function () {
      beforeEach(function () {
        cy.addBlog({ title: 'first blog', author: 'first author', url: 'first url', likes: '1' })
        cy.addBlog({ title: 'second blog', author: 'second author', url: 'second url', likes: '2' })
        cy.addBlog({ title: 'third blog', author: 'third author', url: 'third url', likes: '3' })
      })

      it('a blog can be liked', function () {
        cy.contains('second blog')
          .contains('view').click()
        cy.contains('like').click()
        cy.contains('likes 3')
      })

      it('user can remove a blog that he/she added', function () {
        cy.contains('third blog')
          .contains('view').click()
        cy.contains('remove').click()

        cy.get('.blogs').should('not.contain', 'third blog')
      })

    })

    describe('When several blogs exist', function () {
      beforeEach(function () {
        cy.addBlog({ title: 'first blog', author: 'first author', url: 'first url', likes: '1' })
        cy.addBlog({ title: 'second blog', author: 'second author', url: 'second url', likes: '2' })
        cy.addBlog({ title: 'third blog', author: 'third author', url: 'third url', likes: '3' })
      })

      it('blogs are arranged by number of likes', function () {
        cy.contains('first blog')
          .contains('view').click()
        cy.contains('second blog')
          .contains('view').click()
        cy.contains('third blog')
          .contains('view').click()

        cy.get('.blogs')
          .then(blogs => {
            cy.wrap(blogs[0]).contains('Likes: 3')
            cy.wrap(blogs[1]).contains('Likes: 2')
            cy.wrap(blogs[2]).contains('Likes: 1')
          })
      })
    })
  })
})