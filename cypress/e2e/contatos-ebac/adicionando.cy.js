/// <reference types="cypress" />

describe('Testes para os contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar um contato novo', () => {
        cy.get('input[type="text"]').type('Clark Kent')
        cy.get('input[type="email"]').type('SuperMan@hotmail.com')
        cy.get('input[type="tel"]').type('11 123456789')
        cy.get('button[type="submit"]').click()

        cy.screenshot('tela-adicionando-contato')
    })

})