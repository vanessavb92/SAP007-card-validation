import validator from './validator.js';

//console.log(validator);


// pego id e  coloco en uma constante
const form = document.getElementById('formCard');
const inputNumCard = document.getElementById('textValidation');
const inputNameCard = document.getElementById('mainNameValidation');
const numUserCard = document.getElementById('cardNum');
const nameUserCard = document.getElementById('cardName')
const button = document.getElementById('mainbuttonValidation');
const cardNumValid = document.getElementById('cardNumValid');
const cardNumInvalid = document.getElementById('cardNumInvalid');

button.addEventListener("click", function (e) {
    e.preventDefault();
    let inputValue = inputNumCard.value;
    let inputCard = validator.isValid(inputValue);

    if (inputCard % 10 == true && inputValue.length >= 13 && inputValue.length <= 16) {
        cardNumValid.textContent = 'O cartão de crédito é va´lido. pode usar';
        cardNumInvalid.textContent = "";
        inputNumCard.classList.remove('main-textValidation-inValid');
        inputNumCard.classList.add('main-textValidation-valid');

    }
    else {
        cardNumInvalid.textContent = 'O cartão de crédito não é va´lido. Não pode usar.';
        cardNumValid.textContent = '';
        inputNumCard.classList.remove('main-textValidation-valid');
        inputNumCard.classList.add('main-textValidation-inValid');
    }
    if (inputValue.length == 0) {
        cardNumInvalid.textContent = 'O campo esta vazio. Coloque o  número do cartão.';
    }
    form.reset();
    return inputCard;

});

// Exibe o texto de entrada no cartão e substitui espaços em branco, strings e caracteres.
inputNumCard.addEventListener('keyup', function (e) {
    let valueInputNumCard = e.target.value;
    numUserCard.textContent = valueInputNumCard;
    inputNumCard.value = valueInputNumCard.replace(/\s/g, '').replace(/\D/g, '');
});

inputNameCard.addEventListener('keyup', function (e) {
    let valueInputNameCard = e.target.value;
    // Mostra o texto em letras maiúsculas
    nameUserCard.textContent = valueInputNameCard.toUpperCase();
    // Substitui os números por espaço vazio
    inputNameCard.value = valueInputNameCard.replace(/([0-9])/g, '');
    //Se o texto estiver vazio, mostra este texto
    if (valueInputNameCard == '') {
        nameUserCard.textContent = 'Ex: vanessa borges';
    }
});

// muda os digítos por simbolos #..
inputNumCard.addEventListener('keyup', function (e) {
    let cardNum = e.target.value;
    let replacement = validator.maskify(cardNum);
    numUserCard.textContent = replacement;

})

// Remove e adiciona classes via click
inputNumCard.addEventListener('click', function (e) {
    let cardNum = e.target.value;
    if (cardNum == 0) {
        numUserCard.textContent = '#### #### #### ####';
        cardNumInvalid.textContent = '';
        inputNumCard.classList.remove('main-textValidation-inValid');
        cardNumValid.textContent = '';
        inputNumCard.classList.remove('main-textValidation-valid');
    }

})
