// import Generic from 'support\generic.js';

import Generic from '../support/generic.js'
// describe("Link in",()=>{

//     it("Login",()=>{
//         cy.visit("https://www.linkedin.com/login")
//         cy.get("#username").type("amitchikte@gmail.com")
//         cy.get("#password").type("9657363602")
//         cy.get('[type="submit"]').click()
//     })

//     it("Login",()=>{
        
//         cy.get(".app-aware-link").invoke('removeAttr','target')
//         cy.get(".search-global-typeahead__input.always-show-placeholder").type("Shraddha Bhagat")
//         // cy.wait(20000)
//         cy.contains("See all results").click()
       
//     })
// })


describe("Link in",()=>{
    var x
    var url

    it("Login",()=>{
        cy.visit("https://www.google.com/")
        cy.fixture('Test.json').then((data)=>{
            var a = new Generic()
            x = a.emaildomain(data.email)
            cy.log(x)
            cy.get("[name='q']").type(x).type('{enter}')
            

        })
        cy.contains("Careers").click()
        cy.wait(10000)
        cy.scrollIntoView('Copyright')
        // cy.get("#password").type("9657363602")
        // cy.get('[type="submit"]').click()
    })

    it("email",()=>{
        cy.visit("https://www.google.com/")
        cy.fixture('Test.json').then((data)=>{
            var a = new Generic()
            x = a.emaildomain(data.data1.email)
            cy.log(x)
            cy.get("[name='q']").type(x + " copyright name").type('{enter}')
            cy.get(".LC20lb.MBeuO.DKV0Md").eq(0).click()
            

        })
        // cy.contains("Careers").click()
        // cy.wait(10000)
        // cy.scrollIntoView('Copyright')
        // cy.get("#password").type("9657363602")
        // cy.get('[type="submit"]').click()
    })

    it("Amit",()=>{
        cy.visit("https://www.google.com/")
        cy.fixture('Test.json').then((data)=>{
            var a = new Generic()
            x = a.emaildomain(data.data1.email)
            cy.log(x)
            cy.get("[name='q']").type(x+ data.data1.city +" contact").type('{enter}')
            

        })
        let address
        cy.get(".VwiC3b.yXK7lf.MUxGbd.yDYNvb.lyLwlc.lEBKkf").eq(1).then((el)=>{
            cy.log(el.text())
            address = el.text()
            cy.writeFile('../fixtures/addresses',address)


        })
        cy.log(address)
        // cy.log(y)
        
    })

    it("Deepanshu",()=>{
        cy.visit("https://www.google.com/")
        cy.fixture('Test.json').then((data)=>{
            var a = new Generic()
            x = a.emaildomain(data.data2.email)
            cy.log(x)
            cy.get("[name='q']").type(x+ data.data2.city +" contact").type('{enter}')
            

        })
        let address
        cy.get(".VwiC3b.yXK7lf.MUxGbd.yDYNvb.lyLwlc.lEBKkf").eq(1).then((el)=>{
            cy.log(el.text())
            address = el.text()
            cy.writeFile('../fixtures/addresses',address, { flag: 'a+' })


        })
        cy.log(address)
        // cy.writeFile('addresses',address)
        // cy.log(y)
        
    })

    it("Linkedin",()=>{
        cy.visit("https://www.google.com/")
        cy.fixture('Test.json').then((data)=>{
            // var a = new Generic()
            // x = a.emaildomain(data.data2.name)
            cy.log(x)
            cy.get("[name='q']").type(data.data2.name+ data.data2.Designation + " LinkedIn").type('{enter}')
            

        })
        url = cy.url()
        // cy.get(".LC20lb.MBeuO.DKV0Md").eq(0).click()
        // cy.document().then((doc) => {
        //     cy.writeFile('../fixtures/pagedata', doc);
        //   });
        // let address
        // cy.get(".VwiC3b.yXK7lf.MUxGbd.yDYNvb.lyLwlc.lEBKkf").eq(1).then((el)=>{
        //     cy.log(el.text())
        //     address = el.text()
        //     cy.writeFile('../fixtures/addresses',address, { flag: 'a+' })


        // })
        // cy.log(address)
        // cy.writeFile('addresses',address)
        // cy.log(y)
        
    })

    it("url",()=>{
        cy.visit(url)
    })

    it("case-1 First",()=>{
        cy.visit("https://www.google.com/")
        cy.fixture('Test.json').then((data)=>{
            cy.get("[name='q']").type(data[0].FirstName + data[0].Lastname + data[0].JobTitle + " LinkedIn").type('{enter}')
            // cy.log(data.Sheet1[0])
            // cy.get(".LC20lb.MBeuO.DKV0Md").eq(0).click()    

        })
        cy.get(".MUxGbd.wuQ4Ob.WZ8Tjf  span").eq(0).then((el)=>{
            var city = el.text()
            cy.log(city)
            cy.writeFile('../fixtures/city',city + '\n', { flag: 'a+' })

        })

        cy.get(".MUxGbd.wuQ4Ob.WZ8Tjf  span").eq(2).then((el)=>{
            var Designation = el.text()
            // cy.log(city)
            cy.writeFile('../fixtures/designation',Designation, { flag: 'a+' })

        })
       
    })

    it("case-1(Second)",()=>{
        cy.visit("https://www.google.com/")
        cy.fixture('Test.json').then((data)=>{
            cy.get("[name='q']").type(data[1].FirstName + data[1].Lastname + data[1].JobTitle + " LinkedIn").type('{enter}')
            
            // cy.get(".LC20lb.MBeuO.DKV0Md").eq(0).click()    

        })
        cy.get(".MUxGbd.wuQ4Ob.WZ8Tjf  span").eq(0).then((el)=>{
            var city = el.text()
            cy.log(city)
            cy.writeFile('../fixtures/city',city+'\n', { flag: 'a+' })

        })

        cy.get(".MUxGbd.wuQ4Ob.WZ8Tjf  span").eq(2).then((el)=>{
            var Designation = el.text()
            // cy.log(city)
            cy.writeFile('../fixtures/designation',Designation, { flag: 'a+' })

        })
       
    })

    it("case-1(Third)",()=>{
        cy.visit("https://www.google.com/")
        cy.fixture('Test.json').then((data)=>{
            cy.get("[name='q']").type(data[2].FirstName+ data[2].Lastname + data[2].JobTitle + " LinkedIn").type('{enter}')
            // cy.get(".LC20lb.MBeuO.DKV0Md").eq(0).click()    

        })
        cy.get(".MUxGbd.wuQ4Ob.WZ8Tjf  span").eq(0).then((el)=>{
            var city = el.text()
            cy.log(city)
            cy.writeFile('../fixtures/city',city + '\n', { flag: 'a+' })

        })

        cy.get(".MUxGbd.wuQ4Ob.WZ8Tjf  span").eq(2).then((el)=>{
            var Designation = el.text()
            // cy.log(city)
            cy.writeFile('../fixtures/designation',Designation, { flag: 'a+' })

        })
       
    })

    it("case-1(Fourth)",()=>{
        cy.visit("https://www.google.com/")
        cy.fixture('Test.json').then((data)=>{
            cy.get("[name='q']").type(data[3].FirstName+ data[3].Lastname + data[3].JobTitle + " LinkedIn").type('{enter}')
            // cy.get(".LC20lb.MBeuO.DKV0Md").eq(0).click()    

        })
        cy.get(".MUxGbd.wuQ4Ob.WZ8Tjf  span").eq(0).then((el)=>{
            var city = el.text()
            cy.log(city)
            cy.writeFile('../fixtures/city',city + '\n', { flag: 'a+' })

        })

        cy.get(".MUxGbd.wuQ4Ob.WZ8Tjf  span").eq(2).then((el)=>{
            var Designation = el.text()
            // cy.log(city)
            cy.writeFile('../fixtures/designation',Designation, { flag: 'a+' })

        })
       
    })

    it("case-3(Telephone)",()=>{
        cy.visit("https://www.google.com/")
        cy.fixture('Test.json').then((data)=>{
            // var a = new Generic()
            // x = a.emaildomainname(data.data3.email)
            // cy.log(x)
            cy.get("[name='q']").type(data[1].Company + " Telephone number by google" ).type('{enter}')

        })

        cy.get(".dbg0pd.OSrXXb").eq(0).click()
        cy.get(".LrzXr.zdqRlf.kno-fv span").then((el)=>{
            var TelephoneNumber = el.text()
            cy.writeFile('../fixtures/Telephone',TelephoneNumber, { flag: 'a+' })
        })
        
       
    })

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