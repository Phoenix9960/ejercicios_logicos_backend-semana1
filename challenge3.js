const capitalizeLetters = (str) => {
    //Implementación
    let cadenas = str.split(' ');

    cadenas.forEach( (cadena, idx) => {
        let nStr = cadena.charAt(0).toUpperCase() + cadena.slice(1);
        cadenas[idx] = nStr;
    });

    return cadenas.join(' ');

}

module.exports = {
    capitalizeLetters
}