let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

function filterRange(arr, num1, num2){
    return arr.filter(item => (item >= num1) && (item <= num2))
}

console.log(arr);
console.log(filtered);