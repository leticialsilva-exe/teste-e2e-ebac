Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('selecionarMenu', (menu) => {
    cy.get('#primary-menu').contains(`${menu}`).click()
})

Cypress.Commands.add('buscarProdutoPorNome', (nomeProduto) => {
    cy.get('[name="s"]').eq(1).type(`${nomeProduto}`)
    cy.get('.tbay-search-result-wrapper .ui-menu-item').eq(0).click()

})

Cypress.Commands.add('selecionarDetalhesProduto', (tamanho, cor, quantidade) => {
    cy.wait(1000)
    cy.get(`[data-value=${tamanho}]`).click()
    cy.get(`[data-value=${cor}]`).click()
    cy.get('[name="quantity"]').clear().type(`${quantidade}`)
    //clicando em comprar
    cy.get('.single_add_to_cart_button').click()
})

Cypress.Commands.add('efetuarCheckout', (formaPagamento) => {
    //indo ao carrinho
    cy.get('.woocommerce-message > .button').click()

    //checkout
    cy.get('.checkout-button').click()
    cy.get('#billing_first_name').type('Maria')
    cy.get('#billing_last_name').type('Dilue')
    cy.get('#billing_address_1').type('Rua dos Mero numero zero')
    cy.get('#billing_city').type('Meroscity')
    cy.get('#billing_postcode').type('09846-030')
    cy.get('#billing_phone').type('119997263562')
    cy.get('#billing_email').type('email@gmail.com')
    cy.get('li').contains(`${formaPagamento}`).click()
    //aceitar termos
    cy.get('#terms').click()
    //confirmar pedido
    cy.get('#place_order').click()
})

Cypress.Commands.add('', () => {
    
})

