describe("Backend Password Reset Tests", () => {
  it("Envoi d'un lien de réinitialisation de mot de passe", () => {
    cy.request("POST", "/password-reset", { email: "test@example.com" }).then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq(
          "Password reset link sent to your email account"
        );
      }
    );
  });

  it("Vérification d'un lien de réinitialisation de mot de passe valide", () => {
    // Assurez-vous d'avoir un utilisateur existant avec un token valide
    const userId = "user_id";
    const token = "valid_token";

    cy.request("GET", `/password-reset/${userId}/${token}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.eq("Valid Url");
    });
  });

  it("Vérification d'un lien de réinitialisation de mot de passe invalide", () => {
    // Assurez-vous d'avoir un utilisateur existant avec un token invalide
    const userId = "user_id";
    const token = "invalid_token";

    cy.request({
      method: "GET",
      url: `/password-reset/${userId}/${token}`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq("Invalid link2");
    });
  });

  it("Réinitialisation du mot de passe", () => {
    // Assurez-vous d'avoir un utilisateur existant avec un token valide et un mot de passe valide
    const userId = "user_id";
    const token = "valid_token";
    const newPassword = "new_password";

    cy.request("POST", `/password-reset/${userId}/${token}`, {
      password: newPassword,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Password reset successfully");
    });
  });
});
