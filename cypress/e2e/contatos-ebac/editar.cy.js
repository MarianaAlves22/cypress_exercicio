/// <reference types="cypress" />

describe('Testes para os contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Editando contatos', () => {
        cy.get('button[class="edit"]').first().click()
        cy.get('input[type="text"]').clear().type('Bruce Wayne')
        cy.get('input[type="email"]').clear().type('WayneInterprises@hotmail.com')
        cy.get('input[type="tel"]').clear().type('11984657302')
        cy.get('button[type="submit"]').click()

        cy.screenshot('tela-editando-contato')
    })

})