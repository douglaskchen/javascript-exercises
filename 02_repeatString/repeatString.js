const repeatString = function(word, num) {
    let outputWord = '';
    
    if (num < 0)
        outputWord = 'ERROR';
    else {
        outputWord = word.repeat(num);
        /*for (let i = 0; i < num; i++)
            outputWord += word;*/
    }

    return outputWord;
};

// Do not edit below this line
module.exports = repeatString;