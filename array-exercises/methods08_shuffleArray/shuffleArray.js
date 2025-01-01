let arr = [1, 2, 3];
// arr = [1, 2, 3]
alert(arr);

shuffle(arr);
// arr = [3, 2, 1]
alert(arr);

shuffle(arr);
// arr = [2, 1, 3]
alert(arr);

shuffle(arr);
// arr = [3, 1, 2]
alert(arr);
// ...

/* CODE BELOW TESTS PROBABILITY OF EACH PERMUTATION */
function shuffle(array) {
    array.forEach((item, index, array) => {
        let rand = Math.floor(Math.random() * 3);
        let temp = array[rand];

        array[rand] = item;
        array[index] = temp;
    });
}

let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };
  
  for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
  }
  
  // show counts of all possible permutations
  for (let key in count) {
    alert(`${key}: ${count[key]}`);
  }