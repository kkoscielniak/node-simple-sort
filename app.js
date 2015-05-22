var fs = require('fs'),
    byline = require('byline'),
    clone = require('clone');

var sort = require('./sort.js');
var random = require('./lib/random');

console.log('\033[2J'); // clear screen each time app is running (nodemon)


// Sorting strings 
strings = [];
var stream = fs.createReadStream('dict_medium.txt');
stream = byline.createStream(stream);

stream
    .on('data', function(line) {
        strings.push(line.toString());
    })
    .on('end', function() {
        console.log('\nSorting strings...');
        sort.bubbleSort(clone(strings));
        sort.bubbleSort2(clone(strings));
        sort.bubbleSort3(clone(strings));
        sort.selectionSort(clone(strings));
        sort.insertionSort(clone(strings));
        sort.shellSort(clone(strings));
        sort.shellSort2(clone(strings));
        sort.quickSort(clone(strings), 0, strings.length-1);
    });

// Sorting numbers
var numbers = random.randomNumbers(10001, 0, 99999);

console.log('\nSorting numbers...');

sort.bubbleSort(clone(numbers));
sort.bubbleSort2(clone(numbers));
sort.bubbleSort3(clone(numbers));
sort.selectionSort(clone(numbers));
sort.insertionSort(clone(numbers));
sort.shellSort(clone(numbers));
sort.shellSort2(clone(numbers));
sort.quickSort(clone(numbers), 0, numbers.length-1);