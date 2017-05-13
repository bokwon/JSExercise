// A software bug has removed all the spaces, punctuation, and capitalization in a lengthy document.
//A sentence like:
// "Numbers are randomly generated and passed to a method.
// Write an utility to find and maintain the median value as new values are generated."
//
// becomes….
//
// "numbersarerandomlygeneratedandpassedtoamethodwriteanutilitytofindandmaintainthemedianvalueasnewvaluesaregenerated"
// Given a dictionary (as a list of strings) and the corrupted document (which is another string),
// write an algorithm to re-insert spaces into the document such that the number of unrecognized characters
// is minimized.
//
// For this exercise don't worry about replacing punctuation or capitalization.
//
// Note:  The dictionary will not necessarily have all the words in the document.
// Most words will be there but some words — especially proper nouns like names — will not be.


var wordlist = [ "the", "other", "case", "one", "malcovich", "two", "an", "a", "another" ];
//var wordlist2 = [ "i", "reflect", "reflected", "on", "the", "dont", "danger", "trifled", "with", "be", "fact", "facts"];
//s2 = "ireflectedonthefactsthisdangerwasnottobetrifledwith";

var input = "Iamagirl";
// output = "Iam a girl"
// /"Iamagirl".indexOf("the") compare input with each word in dictionary. If there is a match, save it in a matched words array.

function reSpace(input) {
  var matchedWords = wordlist.filter(function(element) {
    var matched = input.indexOf(element);

    if (matched > 0) {
      return element;
    }
  });

  var result = "";
  matchedWords.forEach(function(element) {
    if (input.indexOf(element) > 0) {

    } else {
      result =
    }
  })
  console.log(matchedWords);
}

reSpace(input);
