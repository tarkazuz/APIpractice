const greet = (name) => {
    let nameResult 
    if(typeof(name) === 'string' || !name ){
        if(name === 'Bob'){
            nameResult = `Hello, ${name}`
        } else if (!name){
            nameResult = 'Hello, my friend'
        } else if (name === name?.toUpperCase()){
            nameResult = `HELLO ${name}!`
        }
    } else if(name.length === 2) {
        nameResult = `Hello, ${name[0]} and ${name[1]}`
    } else if(name.length === 3) {
        nameResult = `Hello, ${name[0]}, ${name[1]} and ${name[2]}` 
    }
    console.log(nameResult)
    return nameResult
}

greet(['s', 'c', 'r'])

module.exports = greet