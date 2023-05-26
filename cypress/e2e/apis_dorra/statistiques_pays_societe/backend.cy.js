describe("Check Status", () => {
  it("should retrieve alumni statistics from the backend", () => {
    cy.request("GET", "http://localhost:5000/alumnis/stat").then((response) => {
      expect(response.status).to.equal(200);

      // Verify the structure of the response body
      expect(response.body).to.have.property("alumniByCountry");
      expect(response.body).to.have.property("alumniByCompany");
      expect(response.body).to.have.property("alumniByGraduationYear");

      // Perform assertions on the retrieved data
      const { alumniByCountry, alumniByCompany, alumniByGraduationYear } =
        response.body;

      expect(alumniByCountry).to.be.an("array");
      expect(alumniByCompany).to.be.an("array");
      expect(alumniByGraduationYear).to.be.an("array");
    });
  });
});
