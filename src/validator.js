
const validator = {
    isValid,
    maskify
};

function maskify(creditCardNumber) {
    let maskifyString = creditCardNumber.replace(/.(?=.{4})/g, "#");
    return maskifyString 
}


function isValid(creditCardNumber) {
// console.log(creditCardNumber.split("").reverse().map(Number));

    let arrayValidation = creditCardNumber.split('').reverse().map(Number);

    const arrayNotmultiplied = arrayValidation.filter(function (_, index) {
        return index % 2 == 0;
    });

    const arrayIfMultiplied = arrayValidation.filter(function (_, index) {
        return index % 2 !== 0;
    });

    const arrayMultiplicate = arrayIfMultiplied.map(function (element) {
        let num = element;
        num = num * 2;
        if (num >= 9) {
            num = num - 9;
        }
        return num;
    });

    const arrayCombine = arrayNotmultiplied.concat(arrayMultiplicate);


    let sum = 0;
    for (let i = 0; i < arrayCombine.length; i++) {
        sum = sum + arrayCombine[i];
    }

    if (sum % 10 == 0) {
        return true;
    } else {
        return false;
    }
}

export default validator;