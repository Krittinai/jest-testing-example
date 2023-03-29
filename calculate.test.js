const calculate = require('./calculate')
test("Must calculate properly",()=>{
    expect(calculate(1,2)).toBe(3)
})