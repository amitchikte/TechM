const multiply = require('./multiply')



describe("Test Suite",()=>{
    

    it("String Matchers",()=>{
        expect("Powerbank").toMatch("bank")
    })

    it("Nmber Matchers",()=>{
        expect(multiply(5,5)).toBe(25)
        expect(multiply(5,5)).toBeGreaterThan(20)
        expect(multiply(5,5)).toBeLessThan(30)
        expect(multiply(5,5)).toBeLessThanOrEqual(25)
    })

    it("Null",()=>{
        const n = null
        expect(n).toBe(null)
        expect(n).toBeDefined()
        expect(n).not.toBeUndefined()
        expect(n).not.toBeTruthy()
        expect(n).toBeFalsy()
    })

    it("Array",()=>{
        const car = ["BMW","Audi","Mercedez","Alto"]
        expect(car).toContain("BMW")
        expect(car[0]).toEqual("BMW")
        expect(car[1]).toEqual("Audi")
        expect(car[2]).toEqual("Mercedez")
        expect(car[3]).toEqual("Alto")
        
    })
})