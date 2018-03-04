//last function i could not figure out; getting game to start over

$(document).ready(function(){
    var counterRickman = 30;
    var attackScore = Math.floor(Math.random() * (25 - 10) + 10);
    var attackScoreTwo = Math.floor(Math.random() * (25 - 10) + 10);
    var attackScoreThree = Math.floor(Math.random() * (25 - 10) + 10);
    var attackScoreFour = Math.floor(Math.random() * (25 - 10) + 10);
    var counterGrant = 35;
    var counterNeeson = 40;
    var counter = 0;
    var counterTwo;
    var counterThree;
    var characters = $("#characters").clone();
    var hero = $("#youPhoto").clone();
    var villain = $("#opponentPhoto").clone();
    var deathCounter = 0;

    $("#alanRickman").click(function(){
        
        $("#alanRickman").remove();
        $(".rickman").remove();

        if (counter == 0) {
            $("#youPhoto").attr("src", "images/alanRickman.jpg");
            $("#yourLife").html(counterRickman);
            counterTwo = counterRickman;
            counter++;
            }
        else {
            $("#opponentPhoto").attr("src", "images/alanRickman.jpg");
            $("#opponentLife").html(counterRickman);
            counterThree = counterRickman;
            
        }
        
        
    });

    $("#hughGrant").click(function(){
        
        $("#hughGrant").remove();
        $(".grant").remove();
            
        if (counter == 0) {
            $("#youPhoto").attr("src", "images/hughGrant.jpg");
            $("#yourLife").html(counterGrant);
            counterTwo = counterGrant;
            counter++;
            
        }
        else {
            $("#opponentPhoto").attr("src", "images/hughGrant.jpg");
            $("#opponentLife").html(counterGrant);
            counterThree = counterGrant;
        }
        
      
    });

    $("#liamNeeson").click(function(){
        
        $("#liamNeeson").remove();
        $(".neeson").remove();
        
            
        if (counter == 0) {
            $("#youPhoto").attr("src", "images/liamNeeson.jpg");
            $("#yourLife").html(counterNeeson);
            counterTwo = counterNeeson;
            counter++;
            
        }
        else {
            $("#opponentPhoto").attr("src", "images/liamNeeson.jpg");
            $("#opponentLife").html(counterNeeson);
            counterThree = counterNeeson;
        }
        
      
    });

    $("#attack").click(function(){
        
     
     var a = [1, 2];
     var b = Math.floor(Math.random() * a.length);
     
    
     if (b == 0) {
         counterTwo = counterTwo + attackScore;
         counterThree = counterThree - attackScoreTwo;
        $("#yourLife").html(counterTwo);
        $("#opponentLife").html(counterThree);
     }
     else {
         counterTwo = counterTwo - attackScore;
         counterThree = counterThree + attackScoreTwo;
        $("#yourLife").html(counterTwo);
        $("#opponentLife").html(counterThree);
     } 

    if (counterThree <= 0 && deathCounter == 0) {
        alert("You Win! Select another character to continue playing!");
        $("#opponentPhoto").replaceWith(villain);
        attackScore = attackScoreThree;
        attackScoreTwo = attackScoreFour;
        counterThree = 10;
        deathCounter++;
    }

     if (counterTwo <= 0) {
        alert("You Lose");
        $("#characters").replaceWith(characters);
        $("#youPhoto").replaceWith(hero);
        $("#opponentPhoto").replaceWith(villain);
        counterTwo = 0;
        counterThree = 0;
        $("#yourLife").remove();
        $("#opponentLife").remove();
    }

    if (deathCounter == 1 && counterThree <= 0) {
        alert("You win! Refresh to start over!");
        $("#characters").replaceWith(characters);
        $("#youPhoto").replaceWith(hero);
        $("#opponentPhoto").replaceWith(villain);
        counterTwo = 0;
        counterThree = 0;
        $("#yourLife").remove();
        $("#opponentLife").remove();
    }
      
    });

   
    
   
});