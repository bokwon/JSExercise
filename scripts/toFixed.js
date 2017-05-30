//Number.prototype.toFixed() method have binary rounding issues (eg. (0.615).toFixed(2) === "0.61". It should be "0.62"). Rewrite toFixed() method that can do everything that Javascript native toFixed() can do, and also formats a number properly.

function toFixed(number, precision) {
	if (precision && (precision < 0 || precision > 20)) {
		throw new RangeError("Precision must be between 0 and 20");
	}
	
	
}