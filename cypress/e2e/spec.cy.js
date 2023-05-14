describe("template spec", () => {
  it("should get all tasks (emplty tasks)", () => {
    cy.request("GET", "http://localhost:5000/alumnis/statchomage").then(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });
});
