const sumAll = function(num1, num2) {
    if ((typeof num1 != 'number') || (typeof num2 != 'number')
        || (num1 < 0) || (num2 < 0) || (num1 % 1 != 0) || (num2 % 1 != 0))
        return 'ERROR';

    let sum = 0;
    
    if (num1 > num2){
        let tempNum = num1;
        num1 = num2;
        num2 = tempNum;
    }

    for (let i = num1; i <= num2; i++)
        sum += i;
        
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
