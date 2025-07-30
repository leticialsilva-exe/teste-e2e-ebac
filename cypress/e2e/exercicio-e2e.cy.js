/// <reference types="cypress" />
const produtos = require("../fixtures/produtos.json")

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
    cy.visit('/')
  });

  it.skip('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

    cy.selecionarMenu('Comprar')
    cy.fixture('produtos').then(produto => {
        let formaPagamento = 'Transferência'
        // let formaPagamento = 'Cheque'
        //selecionando 2x produto1
        cy.buscarProdutoPorNome(produto[0].nome)
        cy.selecionarDetalhesProduto(produto[0].tamanho,produto[0].cor, produto[0].qtd)
        cy.get('.woocommerce-message')
            .should('contain',produto[0].qtd)
            .should('contain',produto[0].nome)

        //selecionando 2x produto2
        cy.buscarProdutoPorNome(produto[1].nome)
        cy.selecionarDetalhesProduto(produto[1].tamanho,produto[1].cor, produto[1].qtd)
        cy.get('.woocommerce-message')
            .should('contain',produto[1].qtd)
            .should('contain',produto[1].nome)
        
        cy.efetuarCheckout(formaPagamento)
        cy.get('h1.page-title').should('contain','Pedido recebido')
        cy.get('.woocommerce-order-details')
            .should('contain',`${produto[0].nome} - ${produto[0].tamanho}, ${produto[0].cor}`) 
            .should('contain',`${produto[1].nome} - ${produto[1].tamanho}, ${produto[1].cor}`) 
            .should('contain', formaPagamento)
            .should('contain', 'R$246,00')
    })

  })

})