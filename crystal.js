$(document).ready(function(){
    var hiddenOne = 1 + Math.floor(Math.random() * 12);
    var hiddenTwo = 1 + Math.floor(Math.random() * 12);
    var hiddenThree = 1 + Math.floor(Math.random() * 12);
    var hiddenFour = 1 + Math.floor(Math.random() * 12);
    var score = Math.floor(Math.random() * (53 - 39) + 39);
    var counter = 0;
    var winCounter = 0;
    var lossCounter = 0;
    
    $("#goal").html(score);
    $("#crystalOne").on("click", function(){
        counter = hiddenOne + counter;
        $("#score").html(counter);
        if (counter == score) {
            $("#result").html("You win! Click any Billy Crystal to play again!");
            winCounter = winCounter + 1;
            $("#wins").html(winCounter);
            score = Math.floor(Math.random() * (53 - 39) + 39);
            $("#goal").html(score);
            counter = 0;
            hiddenOne = 1 + Math.floor(Math.random() * 12);
            hiddenTwo = 1 + Math.floor(Math.random() * 12);
            hiddenThree = 1 + Math.floor(Math.random() * 12);
            hiddenFour = 1 + Math.floor(Math.random() * 12);
            }
        else if (counter > score) {
            $("#result").html("You lose. Click any Billy Crystal to play again!");
            lossCounter = lossCounter + 1;
            $("#losses").html(lossCounter);
            score = Math.floor(Math.random() * (53 - 39) + 39);
            $("#goal").html(score);
            counter = 0;
            hiddenOne = 1 + Math.floor(Math.random() * 12);
            hiddenTwo = 1 + Math.floor(Math.random() * 12);
            hiddenThree = 1 + Math.floor(Math.random() * 12);
            hiddenFour = 1 + Math.floor(Math.random() * 12);
            }
        else {
            $("#result").empty();
        }
        });
    $("#crystalTwo").on("click", function(){
        counter = hiddenTwo + counter;
        $("#score").html(counter);
        if (counter == score) {
            $("#result").html("You win! Click any Billy Crystal to play again!");
            winCounter = winCounter + 1;
            $("#wins").html(winCounter);
            score = Math.floor(Math.random() * (53 - 39) + 39);
            $("#goal").html(score);
            counter = 0;
            hiddenOne = 1 + Math.floor(Math.random() * 12);
            hiddenTwo = 1 + Math.floor(Math.random() * 12);
            hiddenThree = 1 + Math.floor(Math.random() * 12);
            hiddenFour = 1 + Math.floor(Math.random() * 12);
            }
        else if (counter > score) {
            $("#result").html("You lose. Click any Billy Crystal to play again!");
            lossCounter = lossCounter + 1;
            $("#losses").html(lossCounter);
            score = Math.floor(Math.random() * (53 - 39) + 39);
            $("#goal").html(score);
            counter = 0;
            hiddenOne = 1 + Math.floor(Math.random() * 12);
            hiddenTwo = 1 + Math.floor(Math.random() * 12);
            hiddenThree = 1 + Math.floor(Math.random() * 12);
            hiddenFour = 1 + Math.floor(Math.random() * 12);
            }
        else {
                $("#result").empty();
            }
        });
    $("#crystalThree").on("click", function(){
        counter = hiddenThree + counter;
        $("#score").html(counter);
        if (counter == score) {
            $("#result").html("You win! Click any Billy Crystal to play again!");
            winCounter = winCounter + 1;
            $("#wins").html(winCounter);
            score = Math.floor(Math.random() * (53 - 39) + 39);
            $("#goal").html(score);
            counter = 0;
            hiddenOne = 1 + Math.floor(Math.random() * 12);
            hiddenTwo = 1 + Math.floor(Math.random() * 12);
            hiddenThree = 1 + Math.floor(Math.random() * 12);
            hiddenFour = 1 + Math.floor(Math.random() * 12);
            }
        else if (counter > score) {
            $("#result").html("You lose. Click any Billy Crystal to play again!");
            lossCounter = lossCounter + 1;
            $("#losses").html(lossCounter);
            score = Math.floor(Math.random() * (53 - 39) + 39);
            $("#goal").html(score);
            counter = 0;
            hiddenOne = 1 + Math.floor(Math.random() * 12);
            hiddenTwo = 1 + Math.floor(Math.random() * 12);
            hiddenThree = 1 + Math.floor(Math.random() * 12);
            hiddenFour = 1 + Math.floor(Math.random() * 12);
            }
        else {
                $("#result").empty();
            }
    });
    $("#crystalFour").on("click", function(){
        counter = hiddenFour + counter;
        $("#score").html(counter);
        if (counter == score) {
            $("#result").html("You win! Click any Billy Crystal to play again!");
            winCounter = winCounter + 1;
            $("#wins").html(winCounter);
            score = Math.floor(Math.random() * (53 - 39) + 39);
            $("#goal").html(score);
            counter = 0;
            hiddenOne = 1 + Math.floor(Math.random() * 12);
            hiddenTwo = 1 + Math.floor(Math.random() * 12);
            hiddenThree = 1 + Math.floor(Math.random() * 12);
            hiddenFour = 1 + Math.floor(Math.random() * 12);
            }
        else if (counter > score) {
            $("#result").html("You lose. Click any Billy Crystal to play again!");
            lossCounter = lossCounter + 1;
            $("#losses").html(lossCounter);
            score = Math.floor(Math.random() * (53 - 39) + 39);
            $("#goal").html(score);
            counter = 0;
            hiddenOne = 1 + Math.floor(Math.random() * 12);
            hiddenTwo = 1 + Math.floor(Math.random() * 12);
            hiddenThree = 1 + Math.floor(Math.random() * 12);
            hiddenFour = 1 + Math.floor(Math.random() * 12);
            }
        else {
                $("#result").empty();
            }
        });
   
    
       
        
   
    
    

});