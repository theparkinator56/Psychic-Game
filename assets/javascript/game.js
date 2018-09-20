 
  $(document).ready(function() {
 var guesstheletter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var rngesus = Math.floor(Math.random() * guesstheletter.length);
var failed = 10
var successful = 0
var letter = guesstheletter[rngesus]
var loss = document.getElementById("losses")
var score = document.getElementById("score")
var remaining = document.getElementById("remaining")
var losses = 0
console.log(letter)
document.onkeyup = function(event) {
    var userguess = event.key;

    if (userguess === letter) {
        console.log("Success");
        failed = 10;
        successful = (successful + 1);
        score.textContent = (successful);
        console.log(letter);
        rngesus = Math.floor(Math.random() * guesstheletter.length);
        letter = guesstheletter[rngesus]


    }

    if (userguess !== letter) {
        console.log("failed");
        failed = (failed - 1);
        remaining.textContent = (failed);
    }

    if (failed === 0) {
        losses = (losses + 1);
        failed = 10;
        loss.textContent = (losses);
        console.log(letter);
        rngesus = Math.floor(Math.random() * guesstheletter.length);
        letter = guesstheletter[rngesus]


    }


}

  });
