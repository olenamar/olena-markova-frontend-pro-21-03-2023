arr = [2, 5, 6, 80];

function arrayRand(arr) {
    let rand = Math.floor(Math.random() * arr.length);
return arr[rand];    
}

console.log(arrayRand(arr));