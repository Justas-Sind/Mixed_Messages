// Random number generator
function rndmnmbr(nmbr) {
    return Math.floor(Math.random() * nmbr)
};

// Object with text variations
const textVariations = {
    variantOne: ['Snuffles', 'Crab', 'Kitto', 'Doggo'],
    variantTwo: ['on the bed', 'in the box', 'on the pile of clothes'],
    variantThree: ['play with you outside', 'be your slave', 'give you mountain of food']

};

// Empty output array
let resultText = [];

// Determination of output text
for (key in textVariations) {
    let variantOption = rndmnmbr(textVariations[key].length)
    switch (key) {
        case 'variantOne':
            resultText.push(`Welcome Mr. ${textVariations[key][variantOption]}.`);
            break;
        case 'variantTwo':
            resultText.push(`We hope you had a good time ${textVariations[key][variantOption]}.`);
            break;
        case 'variantThree':
            resultText.push(`We will be happy to ${textVariations[key][variantOption]}.`);
            break;
        default:
            resultText.push('Something is wrong, I can feel it');
    }
}

// Function outputting final text
function resultArrFunc(arr) {
    return resultText.join(' ')
}

console.log(resultArrFunc(resultText))