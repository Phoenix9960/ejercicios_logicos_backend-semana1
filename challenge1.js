const reverseString = (str) => {
    //Implementación
    if(typeof str === 'string' && str.length > 1 && str.length < 15 ){

        let charArray = str.split('').reverse();
        return charArray.join('');
    }

    throw new Error("Error: Tipo de dato o longitud no admitidos");
}

console.log(reverseString('jja'))

module.exports = {
    reverseString
}