camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");

function camelize(str) {
    let arr = str.split('-');
    console.log(arr);

    arr = arr.filter(item => item);
    console.log(arr);

    arr.forEach((item, index, array) => {
        if(index != 0)
            array[index] = String(item).charAt(0).toUpperCase() + String(item).slice(1);
    });
    console.log(arr);
    
    let result = arr.join('');
    console.log(result);
    console.log('');
}

/* EXAMPLES */
//camelize("background-color") == 'backgroundColor';
//camelize("list-style-image") == 'listStyleImage';
//camelize("-webkit-transition") == 'WebkitTransition';