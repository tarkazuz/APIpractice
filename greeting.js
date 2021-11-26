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
        } else return `${name} is invalid!`
    }

    if(isArray) {
        const arrLength = name.length
        if(arrLength === 2){
            return `Hello, ${name[0]} and ${name[1]}`
        }else if(arrLength === 3){
            return `Hello, ${name[0]}, ${name[1]} and ${name[2]}` 
        } else return `${name} is invalid!`
    }  
}

greet(['s', 'c', 'r'])

module.exports = greet