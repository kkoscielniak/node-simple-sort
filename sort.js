var exports = module.exports = {}


// returns true if a > b for both strings and numbers
var compare = function(a, b) {
	if (typeof a === 'string') {
		if(a.localeCompare(b) > 0) 
			return true;
	} else {
		return (a > b);
	}
}

// Standard version of bubble sort
exports.bubbleSort = function(arr) {
	
	console.time('bubbleSort');
	var A = arr,
		n = arr.length;

	for(i = 0; i < n; i++) {
		for(j = 1; j < n; j++) {
			if(compare(A[j-1], A[j])) {
				var tmp = A[j-1];
				A[j-1] = A[j];
				A[j] = tmp;
			}
		}
	}
	console.timeEnd('bubbleSort');
};

exports.bubbleSort2 = function(arr) {
	var A = arr,
		n = arr.length,
		swapped = false;

	console.time('bubbleSort2');
	for(i = 0; i < n; i++) {
		for(j = 1; j < n; j++) {
			if(compare(A[j-1], A[j])) {
				var tmp = A[j-1];
				A[j-1] = A[j];
				A[j] = tmp;

				swapped = true;
			}
		}
		if(!swapped)
			break; 
		else 
			swapped = false;
	}
	console.timeEnd('bubbleSort2');
};

exports.bubbleSort3 = function(arr) {	
	var A = arr,
		n = arr.length,
		swapped = false;

	console.time('bubbleSort3');

	for(i = 0; i < n; i++) {
		for(j = 1; j < n-i; j++) {
			if(compare(A[j-1], A[j])) {
				var tmp = A[j-1];
				A[j-1] = A[j];
				A[j] = tmp;
			}

		}
	}
	console.timeEnd('bubbleSort3');
};

exports.selectionSort = function(arr) {
	var k, // index of minimal element in arr
		x; // minimal element value
		
	console.time('selectionSort');

	for(i = 0; i < arr.length-1; i++) {
		k = i; 
		x = arr[i];

		for(j = i+1; j < arr.length; j++) {
			if(arr[j] < x) {
				k = j;
				x = arr[j];
			}
		}
		arr[k] = arr[i];
		arr[i] = x;
	}
	console.timeEnd('selectionSort');
};

exports.insertionSort = function(arr) {
	var x, j;

	console.time('insertionSort');
	for (i = 1; i < arr.length; i++) {
		x = arr[i];
		j = i-1;
		while((j >= 0) && (x < arr[j])) {
			arr[j+1] = arr[j];
			j = j-1;
		}
		arr[j+1] = x;
	}
	console.timeEnd('insertionSort');
};

// @todo
// - quicksort 3 rodzaje 
// - quicksort + insertion sort
// - shellsort dla dwóch metod wyznaczania h