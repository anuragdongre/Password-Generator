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
    
}

function getRandomLower() {
}

function getRandomUpper() {
}

function getRandomNumber() {
}

function getRandomSymbol() {
}