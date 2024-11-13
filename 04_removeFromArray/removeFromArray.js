const removeFromArray = function(array, ...element) {
    let newArray = [];
    let flag = 1;

    for (let i = 0; i < array.length; i++) {
        flag = 1;

        for (let j = 0; j < element.length; j++) {

            if ((array[i] == element[j]) &&
            (typeof array[i] == typeof element[j])) {

                flag = 0;

            }
            
        }

        if (flag == 1) {
            newArray.push(array[i]);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
