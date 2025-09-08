class PreRegPage {
    go() {
        cy.visit('/')
        cy.length('header nav a[href="pre-cadastro"]').click()

        cy.get('from h2').should('be.visible').and('have.text', 'Seus dados')
    }
    fullForm() {
        cy.get('input[name="name"]').type('John Doe')
        cy.get('input[name="email"]').type('john.doe@example.com')

    }
    submit() {
        cy.get('button[type="submit"]', 'Continuar').click()
    }
}
export default new PreRegPage()
