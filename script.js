// Random number generator
function rndmnmbr(nmbr) {
    return Math.floor(Math.random() * nmbr)
};

// Object with text variations
const textVar = {
    variantOne: ['Snuffles', 'Crab', 'Kitto', 'Doggo'],
    variantTwo: ['on the bed', 'in the box', 'on the pile of clothes'],
    variantThree: ['play with you outside', 'be your slave', 'give you mountain of food']

};

// Function outputting final text
function resultArrFunc() {
    let randomNumberOne = rndmnmbr(textVar.variantOne.length);
    let randomNumberTwo = rndmnmbr(textVar.variantTwo.length);
    let randomNumberThree = rndmnmbr(textVar.variantThree.length);
    const resultText = `Welcome Mr. ${textVar.variantOne[randomNumberOne]}. We hope you had a good time ${textVar.variantTwo[randomNumberTwo]}. We will be happy to ${textVar.variantThree[randomNumberThree]}.`;
    return resultText;
}

// Variable assignment
const button = document.getElementById('button');
const msgText = document.getElementById('mixmsg');

// Event function
function messageEvent() {
    msgText.innerHTML = resultArrFunc();
    msgText.style.display = 'block';
};

// Event handler
button.addEventListener('click', messageEvent);
