describe("SignupAlumni", () => {
  before(() => {
    cy.loginTest();
  });

  it("should submit the form and redirect to '/check'", () => {
    cy.visit("/signupA");

    cy.get('[data-test="firstname"]').type("John");
    cy.get('[data-test="lastname"]').type("Doe");
    cy.get('[data-test="login"]').type("johndoe");
    cy.get('[data-test="password"]').type("password123");
    cy.get('[data-test="email"]').type("john@gmail.com");
    cy.get('[data-test="phone"]').type("985221512315");
    cy.get('[data-test="birth"]').type("2000-12-12");
    cy.get('[data-test="pays"]').type("France");
    cy.get('[data-test="societe"]').type("Microsoft");
    cy.get('[data-test="promotion"]').type(2021);
    cy.get('[data-test="datediplome"]').type("2021-09-08");
    cy.get('[data-test="embauche"]').type("2021-05-03");

    cy.get("form").submit();

    cy.url().should("eq", Cypress.config().baseUrl + "/check");
  });
});
