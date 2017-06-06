//Write a function that format numbers that are bigger than 1000. If number is less than 1000, return it without formatting the number. If number is bigger than 1000, formatted number should have minimum 2 digits.
// Round the second fractional digit and result should be no more than 4 characters.

var bigNumberFormat = function (number) {

 	if (number === null || number === undefined || number === 0) {
 		return 0;
 	}

 	if (number < 1000) {
 		return number;
 	}

 	var numberFormat = {
 		'K': 1000,
 		'M': 1000000,
 		'B': 1000000000,
 		'T': 1000000000000
 	}

	var formatLength = Object.keys(numberFormat).length;
	 
 	for(var i = formatLength-1; i < formatLength; i--) {
 		var unit = Object.keys(numberFormat)[i];
    var unitValue = numberFormat[unit];
		var formattedNumber = number/unitValue;
		
 		if (number >= unitValue) {
			if (String(formattedNumber).indexOf('.') >= 0) {
				formattedNumber = ((formattedNumber * 10).toFixed())/10;
			}

			if (String(formattedNumber).length >= 4 ) {
			  formattedNumber = formattedNumber.toFixed();
			}
			
			return formattedNumber + unit;
 		}
 	}
}