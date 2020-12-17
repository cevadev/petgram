/* global describe, it, expect, cy */

describe("Petgram", function () {
  //test para ver si la app funciona
  it("The app could be visited", function () {
    cy.visit("/");
  });

  it("Could navigate to a category and see cards", function () {
    //test para navehagr entre categoria y ver foto
    cy.visit("/pet/1");
    cy.get("article");
  });

  it("Could navigate using the navbar to the home", function () {
    //test para ver si podemos navegar con la data al home
    cy.visit("/pet/1");

    cy.get("nav a").first().click();
    cy.url().should("include", "/");
  });

  it("A non registered user see forms to register and login on favs page", function () {
    cy.visit("/favs");
    cy.get("form").should("have.length", 2);
  });
});
