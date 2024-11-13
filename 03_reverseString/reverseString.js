const reverseString = function(word) {
    let outputWord = '';
    let wordlength = word.length;

    for (let i = 0; i < wordlength; i++) {
        outputWord += word[word.length-1];
        word = word.slice(0, word.length-1);        
    }
    
    return outputWord;
};

// Do not edit below this line
module.exports = reverseString;
