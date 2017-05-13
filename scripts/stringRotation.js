// String Rotation: Given two strings, s1 and s2, write code to check if s2 is a rotation of s1.
// AGATTAC is a valid rotation of GATTACA
// GATATAC is NOT a valid rotation of (A) GATTACA
// ternaxial-pat is a valid rotation of axial-pattern

// v4
function isRotation(a, b) {
	return a.length === b.length && (a+a).indexOf(b) != -1;
}
