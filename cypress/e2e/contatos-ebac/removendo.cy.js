/// <reference types="cypress" />

describe('Testes para os contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Removendo contatos', () => {
        cy.get(":nth-child(3) > .sc-gueYoa > .delete").click()

        cy.screenshot('tela-removendo-contato')
    })

})