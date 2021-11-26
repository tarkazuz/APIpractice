const greet = require('./greeting')

describe('Greet', ()=> {
    it('should return correctly with parameter Bob', () => {
        expect(greet('Bob')).toBe('Hello, Bob')
    })
    it('should return correctly with parameter Null', () => {
        expect(greet(null)).toBe('Hello, my friend')
    })
    it('should return correctly with parameter CECILE', () => {
        expect(greet('CECILE')).toBe('HELLO CECILE!')
    })
    it('should return correctly with parameter Array of length two', () => {
        expect(greet(['Soria', 'Cecile'])).toBe('Hello, Soria and Cecile')
    })
    it('should return correctly with parameter Array of length three', () => {
        expect(greet(['Soria', 'Cecile', 'Book'])).toBe('Hello, Soria, Cecile and Book')
    })

})
