const greet = (name) => {

    if(name === 'Bob'){
        return `Hello, ${name}`
    } else if (name === null){
        return 'Hello, my friend'
    } else if (name == name.toUpperCase()){
        return `HELLO ${name}!`
    }
}