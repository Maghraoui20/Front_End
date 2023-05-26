describe("Changement de mot de passe", () => {
  before(() => {
    cy.loginTest();
  });
  it("Cas où les mots de passe ne correspondent pas", () => {
    // Cas où les mots de passe ne correspondent pas
    cy.visit("/change-password");

    cy.get('[data-test="password-input"]').type("MotDePasse123@");
    cy.get('[data-test="valid-password-input"]').type("MotDePasse456@");

    cy.get('button[type="submit"]').click();

    // Vérifier que le message d'erreur s'affiche
    cy.contains("Mot de passes non conformes");
  });
});
