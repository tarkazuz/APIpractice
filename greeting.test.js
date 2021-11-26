const greet = require('./greeting')

describe('Greet', ()=> {
    it('should return correctly with parameter Bob', () => {
        expect(greet('Bob')).toBe('Hello, Bob')
    })
    it('should return correctly with parameter Null', () => {
        expect(greet(null)).toBe('Hello, my friend')
    })
    it('should return correctly with parameter BOB', () => {
        expect(greet('BOB')).toBe('HELLO BOB!')
    })

})
