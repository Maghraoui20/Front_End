describe("Update CV", () => {
    let cvId;
  
    before(() => {
      // Log in and create a CV for the user
      cy.login().then((response) => {
        const userId = response.body.userId;
  
        // Create a CV for the user
        cy.request({
          method: "POST",
          url: Cypress.env("urlBackend") + "/cvs",
          body: {
            iduser: userId,
            // Add other CV fields as needed
          },
        }).then((response) => {
          cvId = response.body._id;
        });
      });
    });
  
    it("should update the CV", () => {
      const dataToUpdate = {
        firstname: "Updated Firstname",
        lastname: "Updated Lastname",
        phone: "123456789",
        // Update other CV fields as needed
      };
  
      cy.request({
        method: "PUT",
        url: Cypress.env("urlBackend") + "/cvs/" + cvId,
        body: dataToUpdate,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq("CV was updated successfully.");
      });
    });
  });
  