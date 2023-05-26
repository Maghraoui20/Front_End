/* eslint-disable no-undef */
describe("cademic year", () => {
    before(() => {
      cy.loginasadmin().then((resp) => {
   
  
      })
    })
  
      it("should generate an academic year", () => {
        cy.viewport(1500, 800)
        cy.visit("/administratif")
        cy.getByData("anneeuniver").click() 
        cy.getByData("anneeUvivgenerate").should("exist")
        cy.getByData("ajouteranneeUniv").should("exist")

        cy.getByData("anneeUvivgenerate").select(3)

        cy.getByData("ajouteranneeUniv").click();

      })

      it("should Switch between academic years ", () => {
        cy.viewport(1500, 800)
        cy.visit("/administratif")
        cy.getByData("readall-evenement").click() 
        cy.getByData("anneeUvivgenerate").should("exist")
        cy.getByData("anneeUvivgenerate").select(1)


      })
    })