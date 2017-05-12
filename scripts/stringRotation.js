//String Rotation: Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring. eg: 'waterbottle', 'erbottlewat'

// v4
function isRotation(a, b) {
	return a.length === b.length && (a+a).indexOf(b) != -1;
}