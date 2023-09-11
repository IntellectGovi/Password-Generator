const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

let passwordLength = 10;
let password ="";

let count = 0;

strengthCol("#ccc");

manageSlider();

function manageSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

function strengthCol(color){
    indicator.style.backgroundColor = color;
}

function getRandom(){
    Math.floor(Math.random()*(max-min) + min);
}

function generateRandomNumber(){
    return getRandom(0,9);
}

function generateRandomUpper(){
    return String.fromCharCode(65,91);
}

function generateRandomLower(){
    return String.fromCharCode(97,123);
}

function generateRandomSymbol(){
    const randsym = getRandom(0,symbols.length);
    return symbols.charAt(randsym);
}

function calcStrength(){
    let hasNum = false;
    let hasLower = false;
    let hasSym = false;
    let hasUpper = false;

    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(symbolsCheck.checked) hasSym = true;
    if(numbersCheck.checked) hasNum =true;

    if(hasUpper && hasSym || (hasLower)){
        strengthCol("#xxx");
    }else{
        strengthCol("#fff");
    }
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }
    catch(e) {
        copyMsg.innerText = "Failed";
    }
    //to make copy wala span visible
    copyMsg.classList.add("active");

    setTimeout( () => {
        copyMsg.classList.remove("active");
    },2000);

}

function shufflePassword(array) {
    //Fisher Yates Method
    for (let i = array.length - 1; i > 0; i--) {
        //random J, find out using random function
        const j = Math.floor(Math.random() * (i + 1));
        //swap number at i index and j index
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

function handcheckCount(){
    
}



