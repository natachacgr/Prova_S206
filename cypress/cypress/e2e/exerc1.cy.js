/// <reference types="cypress"/>

describe('Criando cenário de teste para o site demoblaze', () => {
  
  it('Adicionar um produto ao carrinho: ', () => {
    cy.visit('https://www.demoblaze.com/index.html');
    // Encontrar e clicar em um produto específico
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
    cy.visit('https://www.demoblaze.com/prod.html?idp_=1');
    cy.get('.col-sm-12 > .btn').click();
    // Validar se o carrinho foi atualizado corretamente
    cy.get('#cartur').click();
    var tamanho = 0;
    cy.get('#tbodyid > :nth-child(1) > :nth-child(1) > img').then(($el) => { //elemento que quero contar
      const itemCount = Cypress.$($el).length;
      tamanho = itemCount;
      cy.log(tamanho);
      cy.get('#tbodyid > :nth-child(1) > :nth-child(1) > img').should('have.length', tamanho);
    })        
  })

  
});

