describe("Changement de mot de passe", () => {
  before(() => {
    cy.loginTest();
  });
  it("Changer le mot de passe correctement", () => {
    // Cas où les mots de passe correspondent
    cy.visit("/change-password");

    cy.get('[data-test="password-input"]').type("Mot1de2passe33@");
    cy.get('[data-test="valid-password-input"]').type("Mot1de2passe33@");

    cy.get('button[type="submit"]').click();

    // Vérifier que le message de succès s'affiche
    cy.contains("Mot de passe changé avec succès");
  });
});
