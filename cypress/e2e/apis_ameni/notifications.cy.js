/* eslint-disable no-undef */
describe("notifications", () => {
    let id_etudiant = ""

    before(() => {
      cy.loginasadmin().then((resp) => {
   
  
      })
    })
    before(() => {
        cy.loginasetudiant().then((resp) => {
      id_etudiant=resp.body.model._id
  
        })
      })
      it("should receive notification by email every 6 months to see if he has modified his work ", () => {
      
        cy.request({
          method: "POST",
          url: Cypress.env("urlBackend") + "/users/sendmailtravail",
        }).then((response) => {
          expect(response.status).to.eq(200)
          //     // eslint-disable-next-line no-unused-expressions
         
  
        })
      })

      it("should At the end of each semester,sends an email to all students to update skills and portfolio ", () => {
      
        cy.request({
          method: "POST",
          url: Cypress.env("urlBackend") + "/users/sendmailmajcompetences",
        }).then((response) => {
          expect(response.status).to.eq(200)
          //     // eslint-disable-next-line no-unused-expressions
         
  
        })
      })


      it("should Send email to update graduation date ", () => {
      
        cy.request({
          method: "POST",
          url: Cypress.env("urlBackend") + "/users/sendmaildiplome",
        }).then((response) => {
          expect(response.status).to.eq(200)
          //     // eslint-disable-next-line no-unused-expressions
         
  
        })
      })

    
      it("should Receive notification on the application that its subject has been assigned  ", () => {
        cy.request("GET", Cypress.env("urlBackend") + "/notification/getid/"+id_etudiant ).then((response) => {
          console.log(response,"this is our response");
          expect(response.status).to.eq(200)
          // Check the response type and length
          // expect(response.body.model).to.have.lengthOf(0)
        })
      })


    })