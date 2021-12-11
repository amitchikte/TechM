
import Generic from '../support/generic.js'



describe("Link in",()=>{
    

    it.only("Case 1 - stored city and designation",()=>{
        cy.visit("https://www.google.com/")

        cy.fixture('Test.json').its('length').then((i)=>{
            for(let x=0;x<i;x++){
                cy.fixture('Test.json').then((data)=>{
                    cy.get("[name='q']").type(data[x].FirstName+ data[x].Lastname + data[x].JobTitle + " LinkedIn").type('{enter}')

                    cy.get(".MUxGbd.wuQ4Ob.WZ8Tjf  span").eq(0).then((el)=>{
                        var city = el.text()
                        cy.log(city)
                        cy.writeFile('../fixtures/city',city + '\n', { flag: 'a+' })
            
                    })
            
                    cy.get(".MUxGbd.wuQ4Ob.WZ8Tjf  span").eq(2).then((el)=>{
                        var Designation = el.text()
                        // cy.log(city)
                        cy.writeFile('../fixtures/designation',Designation + '\n', { flag: 'a+' })
                        cy.go('back')
                        cy.get("[name='q']").clear({force: true})
            
                    })
                    

                }) 
            
            }

        })
        
    
    })



})