////////////////////////////
///   Global Variables   ///
////////////////////////////

let testString;
let joinArray;
let alphaOrder;
let palinYesOrNo;


/////////////////////
///   Functions   ///
/////////////////////

// getInput and test if it only contains a-z or A-Z
function getInput() {
    testString = document.querySelector('#stringInput').value;
    var reg = /^[a-zA-Z]+$/;
    if (reg.test(testString)) {
        console.log(reg.test(testString));
    } else {
        alert('Please use only letters. UPPERCASE and lowercase are acceptable')
    }
    reversal();
}

// reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
function reversal() {
    joinArray = testString.split('').reverse().join('');
    alphabits()
}

// return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
function alphabits() {
    alphaOrder = testString.split('').sort().join('');
    palindrome();
}

// determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
function palindrome() {
    // to lowercase
    var lowerTestString = testString.toLowerCase();
    var lowerJoinArray = joinArray.toLowerCase();
    if (lowerTestString === lowerJoinArray) {
        palinYesOrNo = "That is a palindrome!";
    } else {
        palinYesOrNo = "Not a palindrome.";
    }
    writeToHTML();
}

function writeToHTML() {
    let resultsDiv = document.querySelector('#results');
    resultsDiv.innerHTML = '';
    resultsDiv.innerHTML = `
        <p>Reversal: ${joinArray}</p>
        <p>Alphabits: ${alphaOrder}</p>
        <p>Palindrome: ${palinYesOrNo}</p>`
}


///////////////////////////
///   Event Listeners   ///
///////////////////////////

// Listen for enter key
let inputBox = document.querySelector('#stringInput');
inputBox.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        getInput();
    }
})

// Listen for button press
let submitButton = document.querySelector('#subButton');
submitButton.addEventListener('click', getInput);
