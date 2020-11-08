import '../utils/random-num'
const getRandomNum = require( '../utils/random-num')

//INPUT 
//It will take a number that defines the range of the generated numbers

//OUTPUT 
//It will return a number 
//The number will be between 0 and the max number specified in the function argument


describe("Random number function", () => {
  test('receiving valid number inputs', () => {
    const num = 2
    expect(getRandomNum(num)).toBeLessThanOrEqual(num)

    expect(getRandomNum(num)).not.toBeGreaterThan(num)

    expect(getRandomNum(num)).not.toBeNull()

    expect(getRandomNum(num)).not.toBeUndefined()
  })
})