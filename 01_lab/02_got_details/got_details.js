// DOM #main div element
var main = document.getElementById('main');

// **** Your JavaScript code goes here ****
function Char (name, isAlive, house, house_affiliations, prob_of_survival, current_location) {
  this.name = name;
  this.isAlive = isAlive;
  this.house = house;
  this.house_affiliations = house_affiliations;
  this.prob_of_survival = prob_of_survival;
  this.current_location = current_location;
}

function halfSurvival (char) {
  return char.prob_of_survival / 2;
}

function debugCharacters (charArray) {
  charArray.forEach(function(char) {
    console.log(char.name + ": " + char.prob_of_survival);
  })
}
var jon = new Char("Jon Snow", 1, "Stark", ["Stark", "Targaryen"], 84, "Winterfell");
var tyrion = new Char("Tyrion Lannister", 1, "Lannister", ["Targaryen, Lannister"], 70, "Way to Westeros");
var joffery = new Char("Joffery Baratheon", 0, "Baratheon", ["Lannister", "Baratheon", "Tyrell"], null, null);
var king = new Char("The Night's King", 1, "None", ["None"], 25, "Headed South");

var charArray = [jon, tyrion, joffery, king];

// charArray.forEach(function(char) {
//   if (char.name != "Jon Snow") {
//     char.prob_of_survival = halfSurvival(char);
//   }
// });
//
// debugCharacters(charArray);

var main = document.getElementById("main");

var header = document.createElement("h3");
main.appendChild(header);
header.textContent = "My Favorite GoT Characters";

charArray.forEach(function(char) {
  var charDiv = document.createElement("div");
  main.appendChild(charDiv);

  var name = document.createElement("h4");
  charDiv.appendChild(name);
  name.textContent = "Name: " + char.name;

  var house = document.createElement("p");
  charDiv.appendChild(house);
  house.textContent = "House: " + char.house;

  var prob_of_survival = document.createElement("p");
  charDiv.appendChild(prob_of_survival);
  prob_of_survival.textContent = "Survival: " + char.prob_of_survival + "%";

  var status = document.createElement("p");
  charDiv.appendChild(status);
  status.textContent = "Status: " + char.isAlive;

});
