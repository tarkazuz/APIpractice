const greet = (name) => {
    let nameResualt 
    if(name === 'Bob'){
        nameResualt = `Hello, ${name}`
    } else if (!name){
        nameResualt = 'Hello, my friend'
    } else if (name === name?.toUpperCase()){
        nameResualt = `HELLO ${name}!`
    }
    console.log(nameResualt)
    return nameResualt
}

module.exports = greet