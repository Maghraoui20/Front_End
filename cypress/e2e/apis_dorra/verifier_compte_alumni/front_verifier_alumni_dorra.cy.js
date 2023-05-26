describe("Check Status", () => {
  before(() => {
    cy.loginTest();
  });

  it("should display 'Dossier accepté' message when the status is accepted", () => {
    cy.visit("/check");

    const acceptedStatusText =
      "Dossier accepté, vous pouvez vous connecter à votre espace";

    cy.get('[data-test="code"]').type("NzcxXzE2ODIzNDkxMDE3NTZfNDg5");
    cy.get("form").submit();

    cy.contains(acceptedStatusText).should("be.visible");
  });

  it("should display 'Dossier pas encore accepté' message when the status is not accepted", () => {
    cy.visit("/check");

    const notAcceptedStatusText = "Dossier pas encore accepté";

    cy.get('[data-test="code"]').type("MjE4XzE2ODIzNDk4MDM1NDBfMjM");
    cy.get("form").submit();

    cy.contains(notAcceptedStatusText).should("be.visible");
  });
});
