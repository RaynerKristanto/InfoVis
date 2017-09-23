// JavaScript code goes here


function Char (name, isAlive, house, house_affiliations, prob_of_survival, current_location) {
  this.name = name;
  this.isAlive = isAlive;
  this.house = house;
  this.house_affiliations = house_affiliations;
  this.prob_of_survival = prob_of_survival;
  this.current_location = current_location;
}

function isSameLocation(charArray) {
  for (i = 0; i < charArray.length; i++) {
    for (k = 0; k < charArray.length; k++) {
      if (i !=k) {
        if (charArray[i].current_location == charArray[k].current_location) {
          return true;
        }
      }
    }
  }
  return false;
}

function meanProbability(charArray) {
  var sum = 0;
  for (i = 0; i < charArray.length; i++) {
    sum = sum + charArray[i].prob_of_survival;
  }
  return sum / charArray.length;
}
var jon = new Char("Jon Snow", 1, "Stark", ["Stark", "Targaryen"], 84, "Winterfell");
var tyrion = new Char("Tyrion Lannister", 1, "Lannister", ["Targaryen, Lannister"], 70, "Way to Westeros");
var joffery = new Char("Joffery Baratheon", 0, "Baratheon", ["Lannister", "Baratheon", "Tyrell"], null, null);
var king = new Char("The Night's King", 1, "None", ["None"], 25, "Headed South");

var charArray = [jon, tyrion, joffery, king];

console.log(charArray[0].name);
console.log(charArray[1].house_affiliations);
console.log(charArray[3].isAlive);
console.log(isSameLocation(charArray));
console.log(meanProbability(charArray));
