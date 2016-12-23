////////////////////////////
///   Global Variables   ///
////////////////////////////

let testString;

/////////////////////
///   Functions   ///
/////////////////////

function getInput() {
    testString = document.querySelector('#stringInput').value;
    console.log('testString', testString);
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
