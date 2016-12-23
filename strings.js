////////////////////////////
///   Global Variables   ///
////////////////////////////

let testString;

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
}

function reversal() {

}

function alphabits() {

}

function palindrome() {

}

///////////////////////////
///   Event Listeners   ///
///////////////////////////

// Listen for enter key or button press
var inputBox = document.querySelector('#stringInput');
inputBox.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        getInput();
    }
})

// reversal(testString);
// alphabits(testString);
// palindrome(testString);
