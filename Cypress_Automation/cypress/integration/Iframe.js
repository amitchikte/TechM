import "cypress-iframe";
/// <reference types = "Cypress-iframe"/>



describe("iframe handling",()=>{

    it("first",()=>{
        cy.visit("https://zkoss.org/zkdemo/composite/iframe")
        
        cy.iframe("#n35Q6").then(($el)=>{
            var iframe = $el.contents().find("#search-box")
            iframe.click()
        })
    })
})