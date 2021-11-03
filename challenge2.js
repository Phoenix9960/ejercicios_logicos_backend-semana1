const reverseInt = (number) => {
    //Implementación
    if(Number.isInteger(number)){
        let numStr = number.toString();

        if(number > 0){
            let numArray = numStr.split('').reverse();
            return Number.parseInt(numArray.join(''));
        }else{
            let numArray = numStr.split('');
            numArray.shift();
            numArray.reverse();
            return (Number.parseInt(numArray.join(''))*-1);
        }
    }

    throw new Error('Error: Tipo de dato o longitud no admitidos');
}

module.exports = {
    reverseInt
}