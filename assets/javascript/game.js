
var v = 1;
var w = 12;
var x = 19;
var y = 120;
var wins = 0;
var losses = 0;
var crystalValue = [];
var targetNumber = [];
var counter = [];

var startGame = function(event) {


 counter = 0;
 targetNumber = Math.floor(Math.random() * ((y - x) + 1) + x);

crystalValue = [Math.floor(Math.random() * ((w - v) + 1) + v), Math.floor(Math.random() * ((w - v) + 1) + v), Math.floor(Math.random() * ((w - v) + 1) + v), Math.floor(Math.random() * ((w - v) + 1) + v)];
console.log("Crystal values are " + crystalValue);


$("#number-to-guess").text(targetNumber);

$("#scores-text").text(counter);


}

startGame();

for (var i = 0; i < crystalValue.length; i++) {

    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "http://aux3.iconspalace.com/uploads/5123983611224387580.png");

    imageCrystal.attr("data-crystalvalue", crystalValue[i]);

    $("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    
    $("#scores-text").text(counter);

    if (counter === targetNumber) {
        alert("You win!");
        wins++;
        $("#wins-text").text(wins);
        startGame();
    }

    else if (counter >= targetNumber) {
        alert("You lose!!");
        losses++;
        $("#losses-text").text(losses);
        startGame();
    }

});