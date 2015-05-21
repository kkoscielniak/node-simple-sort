var fs = require('fs'),
    byline = require('byline');

var sort = require('./sort.js');
// var data = require('./dataset.js');

console.log('\033[2J'); // clear screen

// var numbers = [9, 8, 10, 11, 5, 6, 100, 55, 2];

var strings = [];


var stream = fs.createReadStream('dict_big.txt');
stream = byline.createStream(stream);

stream
    .on('data', function(line) {
        strings.push(line.toString());
    })
    .on('end', function() {
        console.log(strings);
        // sort.bubbleSort(strings);
        // sort.bubbleSort2(strings);
        // sort.bubbleSort3(strings);
        // sort.selectionSort(strings);
        sort.insertionSort(strings);
    });

// Experiments with very big arrays: 

// for (var a=[], i=0; i<700; ++i) 
//  a[i] = i;

// // http://stackoverflow.com/questions/962802#962890
// function shuffle(array) {
    
//  var tmp, current, top = array.length;
    
//  if(top) while(--top) {
//      current = Math.floor(Math.random() * (top + 1));
//      tmp = array[current];
//      array[current] = array[top];
//      array[top] = tmp;
//  }
//      return array;
// }

// siedemset = shuffle(a);
// console.log(siedemset);
// console.log(sort.insertionSort(siedemset));