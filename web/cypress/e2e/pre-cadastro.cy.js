describe('Pré-Cadastro', () => {
  it('Deve logar o pré-cadastro com sucesso', () => {
    cy.visit('/')

    cy.get('header nav a[href=pre-cadastro]')
      .click()

    cy.get('form h2').should('be.visible').and('have.text', 'Seus dados')

    cy.get('input[name="nome"]').type('Fernando papito')

    cy.get('input[name="email"]').type('fernando@msn.com')   

    cy.contains('button[type=submit]', 'Continuar').click()
    
    cy.get('.user-name').should('be.visible').and('have.text', 'Fernando papito')
    cy.get('.user-email').should('be.visible').and('have.text', 'fernando@msn.com')
  })
})