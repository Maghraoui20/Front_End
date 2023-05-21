describe("update profil etudiant", () => {
  let savedEtudiant;

  before(() => {
    cy.loginasetudiant().then((resp) => {
      savedEtudiant = resp.body; // Assuming the response contains the user data
    });
  });

  it("should update the etudiant's profile", () => {
    const dataToUpdate = {
      firstname: "massarraupdated",
      lastname: "benj",
      phone: "98876554",
      email: "massbbjj@gmail.com",
      login: "massarra",
      password: "123", // Note: Assuming the backend will handle the hashing
      classe: "2eme",
      Birth_date: "1998-09-17",
      niveau: "master",
      etat: "actuel",
      role: "etudiant",
    };

    cy.request({
      method: "PUT",
      url: Cypress.env("urlBackend") + "/users/updatebyid/" + savedEtudiant._id,
      failOnStatusCode: false,
      body: dataToUpdate,
    }).then((response) => {
      console.log(response,"updatedresp");
      expect(response.status).to.eq(200);
      expect(response.body.firstname).to.eq(dataToUpdate.firstname);
      expect(response.body.lastname).to.eq(dataToUpdate.lastname);
      expect(response.body.phone).to.eq(dataToUpdate.phone);
      expect(response.body.email).to.eq(dataToUpdate.email);
      expect(response.body.login).to.eq(dataToUpdate.login);
      expect(response.body.classe).to.eq(dataToUpdate.classe);
      expect(response.body.Birth_date).to.eq(dataToUpdate.Birth_date);
      expect(response.body.niveau).to.eq(dataToUpdate.niveau);
      expect(response.body.etat).to.eq(dataToUpdate.etat);

      // eslint-disable-next-line no-unused-expressions
      expect(response.body._id).to.exist
      savedEtudiant = response.body 
      console.log(savedEtudiant,"saved etudiant");  

      //     // Check the response
    })
  })
})