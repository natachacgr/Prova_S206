/// <reference types="cypress"/>

describe("Criando cenário de teste para o site demoblaze", () => {
  it("Adicionar um produto ao carrinho: ", () => {
    cy.visit("https://www.demoblaze.com/index.html");
    // Encontrar e clicar em um produto específico
    cy.get(
      ":nth-child(1) > .card > .card-block > .card-title > .hrefch"
    ).click();
    cy.visit("https://www.demoblaze.com/prod.html?idp_=1");
    cy.get(".col-sm-12 > .btn").click();
    // Validar se o carrinho foi atualizado corretamente
    cy.get("#cartur").click();
    var tamanho = 0;
    cy.get("#tbodyid > :nth-child(1) > :nth-child(1) > img").then(($el) => {
      //elemento que quero contar
      const itemCount = Cypress.$($el).length;
      tamanho = itemCount;
      cy.log(tamanho);
      cy.get("#tbodyid > :nth-child(1) > :nth-child(1) > img").should(
        "have.length",
        tamanho
      );
    });
  });

  it("Remover um produto do carrinho com sucesso", () => {
    cy.visit("https://www.demoblaze.com/index.html");
    cy.get(
      ":nth-child(1) > .card > .card-block > .card-title > .hrefch"
    ).click();
    cy.visit("https://www.demoblaze.com/prod.html?idp_=1");
    cy.get(".col-sm-12 > .btn").click();
    cy.get("#cartur").click();
    // Remover o produto do carrinho
    cy.get(".success > :nth-child(4) > a").click();
    cy.wait(1000);
    // Validar se o produto foi removido corretamente
    cy.get("#tbodyid > :nth-child(1) > :nth-child(1) > img").should(
      "not.exist"
    );
  });

  it("Exibir mensagem de erro ao tentar fazer login inválido", () => {
    cy.visit("https://www.demoblaze.com/index.html");
    cy.get("#login2").click();
    // Preencher os campos de login e senha com dados inválidos
    cy.get("#loginusername").type("testetrabalho");
    cy.get("#loginpassword").type("testetrabalho");
    cy.get(
      "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
    // Validar se a mensagem de alerta que foi exibida é a esperada
    cy.on("window:alert", (text) => {
      expect(text).to.contains("User does not exist.");
    });
  });
});
