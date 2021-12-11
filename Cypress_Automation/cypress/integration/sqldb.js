

context("Database",()=>{

    it("db interaction",()=>{
        cy.sqlServer("select * from student").then((result)=>{
            cy.log(result)


        })
    })
})