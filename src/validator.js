
const validator = {
    isValid,
    maskify
};

// Número do cartão de máscara.
function maskify(creditCardNumber) {
    //Por meio da expressão regular após o quarto dígito eu começo a mascarar com # (Deixando os quatro últimos descobertos)
    let maskifyString = creditCardNumber.replace(/.(?=.{4})/g, "#");
    return maskifyString //retorna a substituição dos dígitos por #
}

// Validar tarjeta.
function isValid(creditCardNumber) {
    // Eu converto a string em uma matriz, depois a inverto e mapeio convertendo a string em um número.
    let arrayValidation = creditCardNumber.split('').reverse().map(Number);
    //console.log(arrayValidation)

    const arrayNotmultiplied = arrayValidation.filter(function (_, index) {
        return index % 2 == 0;
    });
    //console.log(`Retorna os números que não são multiplicados${arrayNotmultiplied}`)

    const arrayIfMultiplied = arrayValidation.filter(function (_, index) {
        return index % 2 !== 0;
    });
    //console.log(`Retorna os números que são multiplicados ${arrayIfMultiplied}`)

    // Multiplica os números x 2 e o resultado si resulta em dois digitos que somam entre si.
    const arrayMultiplicate = arrayIfMultiplied.map(function (element) {
        let num = element;
        num = num * 2;
        if (num >= 9) {
            num = num - 9;
        }
        return num;
    });
    //console.log(`Números multiplicados ${arrayMultiplicate}`)

    const arrayCombine = arrayNotmultiplied.concat(arrayMultiplicate);

    //console.log(`Mostra os dois array juntos ${arrayCombine}`);

    // Somar todos os números do array
    let sum = 0;
    for (let i = 0; i < arrayCombine.length; i++) {
        sum = sum + arrayCombine[i];
    }
    // //console.log(som)

    if (sum % 10 == 0) {
        return true;
    } else {
        return false;
    }
}

export default validator;