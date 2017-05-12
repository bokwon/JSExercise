//String Rotation: Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring. eg: 'waterbottle', 'erbottlewat'

//v1 with array method.
//function isSubstring(s1, s2) {
//	var s1 = s1.trim().split('').sort().join('');
//	var s2 = s2.trim().split('').sort().join('');
//	
//	if (s1 === s2) {
//		return true;
//	}
//	
//	return false;
//}

//v2 without array method.
function isSubstring(s1, s2) {
	var s1 = s1.trim();
	var s2 = s2.trim();
	
	if (s1.length !== s2.length) {
		return false;
	}
	
	while (s1.length > 0) {
		var tempLetter = s1[0];
		var tempIndex = s2.indexOf(tempLetter);
		if (tempIndex < 0) {
			return false;
		} else {
			s2 = s2.substr(0, tempIndex) + s2.substr(tempIndex+1, s2.length);
		}
		
		s1 = s1.substr(1, s1.length);
	}
	return true;
}