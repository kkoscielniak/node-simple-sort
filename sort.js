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

var swap = function(a, b) {
	var tmp = a; 
	a = b; 
	b = a;
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





exports.bubbleSort3 = function (arr) {	
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





exports.selectionSort = function (arr) {
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





exports.insertionSort = function (arr) {
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





exports.shellSort = function (arr) {

	console.time('shellSort with h=n/2');
	var h = arr.length/2;
	
	while (h > 0) {
		for (var i = h; i < arr.length; i++) {
			var x = arr[i],
				j = i;

			while((j >= h) && (x < arr[j-h])) {
				arr[i] = arr[j-h];
				j -= h;
			}

			arr[i] = x;
		}

		h /= 2;
	}
	console.timeEnd('shellSort with h=n/2');
};





exports.shellSort2 = function (arr) {

	console.time('shellSort with h=1');

	var h = 1,
		tmp = arr.length/9.0;

	while(h < tmp) {
		h = 3 * h + 1;
	}

	while (h > 0) {
		for (var i = h; i < arr.length; i++) {
			var x = arr[i],
				j = i;

			while((j >= h) && (x < arr[j-h])) {
				arr[i] = arr[j-h];
				j -= h;
			}

			arr[i] = x;
		}

		h /= 3;
	}
	console.timeEnd('shellSort with h=1');
};





var quickSort = function (arr, l, r) {
	
	if (l < r) {
		var t = arr[l],	// pivot
			s = l;	// dividing element

		for (var i = l + 1; i < r; i++) {
			if (compare(arr[i], t)) {
				s++;
				swap(arr[s], arr[i]);
			}
		}
		swap(arr[l], arr[i]);

		quickSort(arr, l, s);
		quickSort(arr, s+1, r);
	}
};
var quickSortTiming = function (arr, l, r) {
	
	console.time('Quick Sort');
	quickSort(arr, l, r);
	console.timeEnd('Quick Sort');
};
exports.quickSort = quickSortTiming;





var quickSort2 = function (arr, l, r) {
	
	if (l < r) {
		var t = arr[r/2],	// pivot
			s = l;	// dividing element

		for (var i = l + 1; i < r; i++) {
			if (compare(arr[i], t)) {
				s++;
				swap(arr[s], arr[i]);
			}
		}
		swap(arr[l], arr[i]);

		quickSort(arr, l, s);
		quickSort(arr, s+1, r);
	}
	
};
var quickSort2Timing = function (arr, l, r) {
	
	console.time('Quick Sort 2');
	quickSort2(arr, l, r);
	console.timeEnd('Quick Sort 2');
};
exports.quickSort2 = quickSort2Timing;





var quickSort3 = function (arr, l, r) {
	
	if (l < r) {
		var t = Math.max(Math.min(arr[l], arr[r/2]),(Math.min(Math.max(arr[l], arr[r/2])), arr[r])),	// pivot
			s = l;	// dividing element

		for (var i = l + 1; i < r; i++) {
			if (compare(arr[i], t)) {
				s++;
				swap(arr[s], arr[i]);
			}
		}
		swap(arr[l], arr[s]);

		quickSort(arr, l, s);
		quickSort(arr, s+1, r);
	}
};
var quickSort3Timing = function (arr, l, r) {
	
	console.time('Quick Sort 3');
	quickSort3(arr, l, r);
	console.timeEnd('Quick Sort 3');
};
exports.quickSort3 = quickSort3Timing;





var insertionSortForQS = function (arr) {
	var j = 0,
		l = 0,
		p = 0,
		m = 0,
		tmp;

	for (var i = 0; i < arr.length; i++) {
		tmp = arr[i];
		l = 0;
		p = i-1;

		while (l <= p) {
			m = (l + p) / 2;

			if (tmp < arr[m]) {
				p = m - 1;
			} 
			else {
				l = m + 1;
			}
		}

		for (j = i - 1; j >= l; j--) {
			arraj[l] = tmp;
		}
	}
};
var quicksertion = function (arr, l, r) {
	if (arr.length > 20) {
		if (l < r) {
			var t = arr[l],	// pivot element
				s = l;

			for (var i = l + 1; i < r; i++) {
				if (arr[i] < t) {
					s++;
					swap(arr[s], arr[i]);
				}
			}
			swap(arr[l], arr[r]);

			quicksertion(arr, l, s);
			quicksertion(arr, s + 1, r);
		}
	} 
	else {
		insertionSortForQS(arr);
	}
};
var quicksertionTiming = function (arr, l, r) {
	
	console.time('Quick Sort with Insertion Sort');
	quicksertion(arr, l, r);
	console.timeEnd('Quick Sort with Insertion Sort');
};
exports.quicksertion = quicksertionTiming;
