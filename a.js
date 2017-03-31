const fs = require('fs');

let dataAA;

// fs.readFile('./data.txt', 'utf8', function(err, data){
//     if(err) return console.log(err);
//     dataAA = data;
// });

// console.log(dataAA);

// setTimeout(() => console.log(dataAA), 1000);

// const data = fs.readFile('./data.txt', 'utf8');
// console.log(data);

function read(filename, func) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if(err) return console.log(err);
        func(data);
    });
}


