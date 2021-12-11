const multiply = require('./multiply')

describe('Test multiply positive scenario',()=>{

    it('multiply 3*2 should equal to 6',()=>{
        expect(multiply(3,2)).toBe(6)

    })

    it('Test object',()=>{
        const data = {name:"Amit",age:22}
        data.lastname = "Chikte"
        expect(data).toEqual({name:"Amit",age:22,lastname:"Chikte"})

    })

    it('multiply 3*2 shouldnt equal to 11',()=>{
        expect(multiply(3,2)).not.toBe(11)

    })
})