const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    const copyTest = resultEl.textContent;
    navigator.clipboard.writeText(copyTest).then(()=>{
        // alert the user that the action took place.
        alert("copied to clipbord");
    });
});

generateEl.addEventListener('click', () => {
    
})

function generatePassword(lower, upper, number, symbol, length) {
    let randomIn = [];

    if (lowercaseEl.Checked) randomIn.push(lower);

    if (uppercaseEl.Checked) randomIn.push(upper);

    if (numbersEl.Checked) randomIn.push(number);

    if (symbolsEl.Checked) randomIn.push(symbol);

    let password = " ";

    for (let i = 0 ; i <= length; i++){
        password += randomIn[Math.floor(Math.random()* randomIn.length)]();
    }
    resultEl.textContent = password;
}

function getRandomLower() {
}

function getRandomUpper() {
}

function getRandomNumber() {
}

function getRandomSymbol() {
}