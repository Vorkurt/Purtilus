describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Logged')
    cy.contains('Username')
  })

  it('Button Sign In', () => {
    cy.get('.signUp').first().click()
    cy.contains('Sign In')
    cy.contains('Create')
  })

  it('Login', function () {
    cy.get('#username').type('nechiforelsamuel@yahoo.com')
    cy.get('#password').type('123456')
    cy.get('.bg-blue-400').first().click()
    cy.get('.bg-blue-400').contains('Sign Up')
    cy.visit('/table')
    cy.visit('/auth/test')
  });
})
