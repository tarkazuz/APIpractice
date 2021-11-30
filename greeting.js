const greet = (name) => {

    const isArray = Array.isArray(name)
    const isString = typeof(name) === 'string'

    if(isString || !name ){
        if(name === 'Bob'){
            return `Hello, ${name}`
        } else if (!name){
            return 'Hello, my friend'
        } else if (name === name.toUpperCase()){
            return `HELLO ${name}!`
        } else return `${name} is invalid name!`
    }

    if(isArray) {
        const splitedNames = name.slice(0, name.length).join(",").split(',')
        const trimedNames = splitedNames.map(n => n.trim())
        const namesLength = trimedNames.length
        const namesBeforAnd = trimedNames.slice(0, namesLength-1).join(", ")
        const nameAfterAnd = trimedNames[namesLength - 1]
       if(namesLength > 1){
           return `Hello, ${namesBeforAnd} and ${nameAfterAnd}!`
       } else return `Hello, ${nameAfterAnd}!` 
    } 
}

console.log(greet(['Bob, Cecile', "Smith, Soria, Aria, Maria"]))
console.log(greet(['Bob', 'Ashkaan']))
console.log(greet(['Bob']))
console.log(greet('Bob'))
console.log(greet('BOB'))
console.log(greet(null))
console.log(greet('soria'))

module.exports = greet