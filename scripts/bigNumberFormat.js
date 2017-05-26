function bigNumberFormat(number) {
	
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
	
	for(var i=0; i<Object.keys(numberFormat).length; i++) {
		var temp = Object.keys(numberFormat)[i];
		if(number > numberFormat[temp]){
			 return (number/numberFormat[temp]).toFixed() + temp;
		}
	}
}