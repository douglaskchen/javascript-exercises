const fibonacci = function(num) {
    if (num < 0)   
        return "OOPS"

    let arr = [0];

    for (let i = 1; i <= num; i++) {
        if (i == 1 || i == 2)
            arr.push(1);
        else
            arr.push(arr[i-1]+arr[i-2]);
    }
    
    return arr[num];
};

// Do not edit below this line
module.exports = fibonacci;
