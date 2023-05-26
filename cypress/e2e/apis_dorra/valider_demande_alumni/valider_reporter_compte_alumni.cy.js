describe("ValidAlumnis", () => {
  it("should get all  alumnis ", () => {
    cy.viewport(1500, 800);

    cy.visit("/administratif");
    cy.getByData("valider-alumni").click();

    cy.location("pathname").should("eq", "/validAlumnis");
  });

  it("should accept an alumni", () => {
    cy.visit("/administratif");
    cy.getByData("valider-alumni").click();
    cy.get('[data-rowindex="0"]')
      .find(".MuiCheckbox-root")
      .click({ force: true });
    cy.get('button[data-test="Accepter"]').first().click();
    cy.get('button[data-test="prouver-alumni"]').first().click();
    cy.location("pathname").should("eq", "/validAlumnis");
  });

  it("should report an alumni", () => {
    cy.visit("/administratif");
    cy.getByData("valider-alumni").click();
    cy.get('[data-rowindex="0"]')
      .find(".MuiCheckbox-root")
      .click({ force: true });
    cy.get('button[data-test="Reporter"]').first().click();
    cy.get('button[data-test="confirm-op"]').first().click();
    cy.location("pathname").should("eq", "/validAlumnis");
  });
});
