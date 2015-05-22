exports = module.exports = {}; 

exports.randomNumbers = function(n, minimum, maximum) {
	var randomNumbersArray = [],
		min = minimum || 0,
		max = maximum || n;


	for (var i = 0; i < n; i++) {
		randomNumbersArray[i] = Math.floor(Math.random() * (max - min) + min);
	}
    
	return randomNumbersArray; 
}