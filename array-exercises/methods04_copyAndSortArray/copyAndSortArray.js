let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

function copySorted(array) {
    let result = array.map(item => item);
    return result.sort();
    // return array.slice().sort();
}

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)