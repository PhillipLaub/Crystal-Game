//this area is for generating random numbers between set values, uses formula to generate range
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
//generates the target number randomly between 19 and 120
 targetNumber = Math.floor(Math.random() * ((y - x) + 1) + x);

//generates the crystal value randomly between 1 and 12
//crystal value is an array generating a random number in range(19-120) for each index [0,1,2,3]
crystalValue = [Math.floor(Math.random() * ((w - v) + 1) + v), Math.floor(Math.random() * ((w - v) + 1) + v), Math.floor(Math.random() * ((w - v) + 1) + v), Math.floor(Math.random() * ((w - v) + 1) + v)];
console.log("Crystal values are " + crystalValue);


$("#number-to-guess").text(targetNumber);

$("#scores-text").text(counter);


}

startGame();
// Now for the hard part. Creating multiple crystals each with their own unique number value.

// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < crystalValue.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "http://aux3.iconspalace.com/uploads/5123983611224387580.png");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", crystalValue[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
}

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function () {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    
    
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