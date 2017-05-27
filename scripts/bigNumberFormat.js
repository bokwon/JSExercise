// function bigNumberFormat(number) {
//
// 	if (number === null || number === undefined || number === 0) {
// 		return 0;
// 	}
//
// 	if (number < 1000) {
// 		return number;
// 	}
//
// 	var numberFormat = {
// 		'K': 1000,
// 		'M': 1000000,
// 		'B': 1000000000,
// 		'T': 1000000000000
// 	}
//
// 	for(var i=3; i<Object.keys(numberFormat).length; i--) {
// 		var key = Object.keys(numberFormat)[i];
//         var value = numberFormat[key];
// 		if(number >= value){
// 			return (number/value).toFixed() + key;
// 		}
// 	}
// }

var bigNumberFormat = function (v)
{
    for (var i = 0; v >= 1000; i++)
        v = v / 1000;

    var v = Math.trunc(v * 10) / 10;
    return (v > 10 ? Math.round(v) : v) + " KMBT"[i];
}
