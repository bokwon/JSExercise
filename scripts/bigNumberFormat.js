//Write a function that format numbers that are bigger than 1000. If number is less than 1000, return it without formatting the number. If number is bigger than 1000, formatted number should have minimum 2 digits.
// Round the second fractional digit and result should be no more than 4 characters.

var bigNumberFormat = function (n) {
	if (n === null || n === undefined || n === 0) {
		return 0;
	}

	for (var i = 0; n >= 1000; i++) {
		n = n / 1000;

		if (n < 1000) {
			if (String(n).indexOf('.') >= 0) {
				n = Math.round(n*10)/10;
			}

			if (String(n).length >= 4) {
				n = Math.round(n);
			}
		}
	}

	return (n + " KMBT"[i]).trim();
}
