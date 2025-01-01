function unique(arr) {
    let newArr = [];

    arr.forEach(item => {
        if (!newArr.includes(item)) {
            newArr.push(item);
        }
    });

    return newArr;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(strings) ); // Hare, Krishna, :-O