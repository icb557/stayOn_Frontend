describe('post', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/login')
    cy.get('input[name="email"]').type('isac_cortes82212@elpoli.edu.co')
    cy.get('input[name="password"]').type('P@ssw0rd')
    cy.get('button[type="submit"]').click()
    cy.location('pathname').should('eq', '/')
  })
})