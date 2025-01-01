const palindromes = function (word) {
    const alphaNum = "abcdefghijklmnopqrstuvwxyz1234567890";

    let wordArr = word.toLowerCase().split('');
    wordArr = wordArr.filter(item => alphaNum.includes(item));
    let originalWord = wordArr.join('');

    let reverseWordArr = wordArr.reverse();
    let reverseWord = reverseWordArr.join('');

    return originalWord == reverseWord;
};

// Do not edit below this line
module.exports = palindromes;
