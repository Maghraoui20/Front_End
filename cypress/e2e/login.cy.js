/* eslint-disable no-undef */
describe("login page", () => {
    // to preserve localstorage between tests see https://dev.to/javierbrea/how-to-preserve-localstorage-between-cypress-tests-19o1
      it("connect as admin succcessfully", () => {
      window.localStorage.removeItem("token")
      cy.visit("/signin")
      cy.getByData("phone").should("exist")
      cy.getByData("password").should("exist")
      cy.getByData("phone").type("23000000")
      cy.getByData("password").type("123")
      cy.getByData("connect").click()
      cy.location("pathname").should("eq", "/administratif")
    })
    it("connect as admin directly if I have a token of admin", () => {
      cy.loginasadmin()
      cy.visit("/administratif")
      cy.location("pathname").should("eq", "/administratif")
      cy.getByData("phone").should("not.exist")
      cy.getByData("password").should("not.exist")
    })  
  
       it("connect as etudiant succcessfully", () => {
      window.localStorage.removeItem("token")
      cy.visit("/signin")
      cy.getByData("phone").should("exist")
      cy.getByData("password").should("exist")
      cy.getByData("phone").type("12300000")
      cy.getByData("password").type("123")
      cy.getByData("connect").click()
      cy.location("pathname").should("eq", "/espace-etudiant")
    
    }) 

    it("connect as etudiant directly if I have a token of etudiant", () => {
      cy.loginasetudiant()
      cy.visit("/espace-etudiant")
      cy.location("pathname").should("eq", "/espace-etudiant")
      cy.getByData("phone").should("not.exist")
      cy.getByData("password").should("not.exist")
    })   

    it.only("connect as enseignant succcessfully", () => {
      window.localStorage.removeItem("token")
      cy.visit("/signin")
      cy.getByData("phone").should("exist")
      cy.getByData("password").should("exist")
      cy.getByData("phone").type("25000000")
      cy.getByData("password").type("123")
      cy.getByData("connect").click()
      cy.location("pathname").should("eq", "/enseignant")
    
    }) 

    it.only("connect as enseignant directly if I have a token of enseignant", () => {
      cy.loginasenseignant()
      cy.visit("/enseignant")
      cy.location("pathname").should("eq", "/enseignant")
      cy.getByData("phone").should("not.exist")
      cy.getByData("password").should("not.exist")
    })  

     it("connect as alumni succcessfully", () => {
      window.localStorage.removeItem("token")
      cy.visit("/signin")
      cy.getByData("phone").should("exist")
      cy.getByData("password").should("exist")
      cy.getByData("phone").type("+2168596754")
      cy.getByData("password").type("123")
      cy.getByData("connect").click()
      cy.location("pathname").should("eq", "/espace-alumni")
    
    }) 

    it("connect as alumni directly if I have a token of alumni", () => {
      cy.loginasalumni()
      cy.visit("/espace-alumni")
      cy.location("pathname").should("eq", "/espace-alumni")
      cy.getByData("phone").should("not.exist")
      cy.getByData("password").should("not.exist")
    }) 

     it("connect as directeur succcessfully", () => {
      window.localStorage.removeItem("token")
      cy.visit("/signin")
      cy.getByData("phone").should("exist")
      cy.getByData("password").should("exist")
      cy.getByData("phone").type("51002073")
      cy.getByData("password").type("123")
      cy.getByData("connect").click()
      cy.location("pathname").should("eq", "/espace-directeur")
    
    }) 

    it("connect as directeur directly if I have a token of directeur", () => {
      cy.loginasalumni()
      cy.visit("/espace-directeur")
      cy.location("pathname").should("eq", "/espace-directeur")
      cy.getByData("phone").should("not.exist")
      cy.getByData("password").should("not.exist")
    }) 
  })