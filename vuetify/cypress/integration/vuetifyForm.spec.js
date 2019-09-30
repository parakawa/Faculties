describe('facultie vuetify', () => {
    beforeEach(() => {
        cy.fixture('formVuetify.json').as('formData')
        cy.visit('/')
    })

    it('visit app', () => {
        cy.get('#input-name')
    })
    
    it('fill inputs', () => {
        cy.get('@formData')
            .then(({name}) => {
                cy.log(name)
                cy.get('#input-name').type(name)
                cy.get('#btn-save').click()
                cy.get('#p-name').contains(name)
            })
    })
})