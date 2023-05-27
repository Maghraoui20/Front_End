/* eslint-disable no-undef */
describe("crud enseignant", () => {
    let adminToken = ""
    let adminrole= ""
    before(() => {
      cy.loginasadmin().then((resp) => {
        adminToken = window.localStorage.getItem("token");
        adminrole=window.localStorage.getItem("role")
      })
    })
    it("should add an enseignant ", () => {
        cy.viewport(1500, 800)

        cy.visit("/administratif")
        cy.getByData("gestion-enseignant").click()
        cy.getByData("add-enseignant").click()
        cy.getByData("firstname").should("exist")
        cy.getByData("lastname").should("exist")
        cy.getByData("phone").should("exist")
        cy.getByData("email").should("exist")
        cy.getByData("login").should("exist")
        cy.getByData("password").should("exist")
        cy.getByData("status").should("exist")
        cy.getByData("ajouter").should("exist")

        cy.getByData("firstname").type("farah")
        cy.getByData("lastname").type("ghribi")
        cy.getByData("phone").type("10101010")
        cy.getByData("email").type("farahghri@gmail.com")
        cy.getByData("login").type("farah")
        cy.getByData("password").type("123")
        cy.getByData("status").select(1)

        cy.getByData("ajouter").click()

    })

    
    /*it("should update an etudiant ", () => {
      cy.viewport(1500, 800)

      cy.visit("/administratif")
      cy.getByData("gestion-etudiant").click()
      cy.get('[data-rowindex="0"]     ') //change the id 
      .find('.MuiCheckbox-root')
      .click();
      cy.get('a[data-test="modify-etudiant"]').first().click().then(() => {
        cy.url().should('include', '/update-etudiant/642f411fd22ece85822c5e17')// remplace with the id
      })

      cy.getByData("firstname").should("exist")
        cy.getByData("lastname").should("exist")
        cy.getByData("phone").should("exist")
        cy.getByData("email").should("exist")
        cy.getByData("login").should("exist")
        cy.getByData("classe").should("exist")
        cy.getByData("Birth_date").should("exist")
        cy.getByData("niveau").should("exist")
        cy.getByData("etat").should("exist")
        cy.getByData("modifier").should("exist")

        cy.getByData("firstname").type("newnew")
        cy.getByData("modifier").click().then((res)=>{console.log(res, "resppp");})
      



        cy.location("pathname").should("eq", "/readall-etudiant")
      
    })

    */
    it("should delete an enseignant ", () => {
        cy.viewport(1500, 800)
      cy.visit("/administratif")
      cy.getByData("gestion-enseignant").click()
      cy.get('[data-rowindex="0"]     ') //change the id 
      .find('.MuiCheckbox-root')
      .click();
      cy.get('button[data-test="delete-enseignant"]').first().click()
      cy.get('button[data-test="confirm-enseignant"]').first().click()

     


        cy.location("pathname").should("eq", "/readall-enseignant")
      
    })

    it.only("should get all  enseignant ", () => {
      cy.viewport(1500, 800)

      cy.visit("/administratif")
      cy.getByData("gestion-enseignant").click()
    
        cy.location("pathname").should("eq", "/readall-enseignant")
      
    })

})