/// <reference types="cypress"/>


describe("TestSuite",()=>{


    it("TestCase",()=>{
        cy.visit("https://www.orangehrm.com/hris-hr-software-demo/")
        cy.get("#Form_submitRequest_FirstName").type("Amit")
        cy.get("#Form_submitRequest_LastName").type("Chikte")
        cy.get("#Form_submitRequest_Email").type("Chikte@gmail.com")
        cy.get("#Form_submitRequest_Phone").type("9881698864")
        cy.get("#Form_submitRequest_Country_Holder").click({force:true})
        cy.get("#Form_submitRequest_Country option").each(($el)=>{
            if($el.text()=="Afghanistan"){
                $el.click({force:true})
                
            }
        })

        cy.get(".rc-anchor-pt").click()

        // cy.get("[id = 'rc-anchor-container']").click()

        // cy.contains("reCAPTCHA").click()
        // cy.get("rc-anchor-logo-imgrc-anchor-logo-img-portrait").click()
        cy.get("#Form_submitRequest_action_submitRequest").submit()


    })

    it("second",()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // we expect a 3rd party library error with message 'list not defined'
            // and don't want to fail the test so we return false
            if (err.message.includes('list not defined')) {
              return false
            }
            // we still want to ensure there are no other unexpected
            // errors, so we let them fail the test
          })
        cy.visit("https://www.orangehrm.com/")
        cy.contains("Get a Free Demo").click()
    })

    it.only("second",()=>{
        cy.visit("https://shopnewage.com/")
        cy.get(".middleHeader .search_click_open").click()

    })
})