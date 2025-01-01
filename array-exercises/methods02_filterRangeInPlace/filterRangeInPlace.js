let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert(arr); // [3, 1]


function filterRangeInPlace(arr, num1, num2){
    /*for (let i = 0; i < arr.length; i++){
        if ((arr[i] < num1) || (arr[i] > num2)){
            arr.splice(i, 1);
        }
    }*/

    arr.forEach((item, index, array) => {
        if ((item < num1) || (item > num2)){
            array.splice(index, 1); //or arr.splice(index, 1);
        }
    });
}