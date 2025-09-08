import PreRegPage from '../support/pages/pre-reg.page'

describe('Pré-Cadastro', () => {
  it('Deve logar o pré-cadastro com sucesso', () => {
    PreRegPage.go()
    PreRegPage.fullForm()
    PreRegPage.submit()

    cy.get('.user-name').should('be.visible').and('have.text', 'Fernando papito')
    cy.get('.user-email').should('be.visible').and('have.text', 'fernando@msn.com')

  })

  it('Campos obrigatórios', () => {
  })

  it('Não deve fazer o pré-cadastro apenas com o primeiro nome', () => {
  })

  it('Não deve fazer o pré-cadastro com um email incorreto', () => {
  })
})




