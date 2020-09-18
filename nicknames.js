var randomWords = function(words)
{
	return words[Math.floor(Math.random()*bodyparts.length)];
};
var bodyparts = [
"code",
"html&css skills",
"javascript", "cooking", "mood", "facepalm emotion", "smile", "creativity", "mood"];
var adjectives = ["dirty","awesome","beautifull","hot", "funny", "catastrofic", "intellegent", "thrilling", 
"amazing"];
var animalparts = ["jump","scream","yelling","kiss", "steps", "weigth", "furr", "tail", "handshake", "butt",
"voice"];
var animals = ["a cat","the Yetti","a makaka", "an elefant", "a python", "Dambldoor", "Cristiano Ronaldo",
"the Tiranosaurus Rex", "Morgenshtern", "Ilon Musk", "a crying child"] ;
var offens = "your " + randomWords(bodyparts) + " today is so " + 
randomWords(adjectives) + " as a " +
randomWords(animalparts) + " of " + 
randomWords(animals)+"! :)";
document.write(offens);