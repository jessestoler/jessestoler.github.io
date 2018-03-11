$(document).ready(function() {
    var countdown = 15;
    var counter = 0;
    var decrease;
    var diminish;
    var end;
    var expire;
    var questionSet = [$("#questionOne"), $("#questionTwo"), $("#questionThree"), $("#questionFour"), $("#questionFive"), $("#questionSix"), $("#questionSeven"), $("#questionEight"), $("#questionNine"), $("#questionTen"), $("#you")];
    var rightCounter = 0;
    var wrongCounter = 0;
    
    $(".right").on("click", correct);
    $("#start").on("click", clock);
    $("#start").on("click", go); 
    $(".wrong").on("click", incorrect);
        
    function clock() {
            
            decrease = setInterval(function(){ countdown--; }, 1000);
            
            
            diminish = setInterval(function(){ $("#timer").html(countdown); }, 1000);
            
             
        }
    
        function correct() {
            
            setTimeout(function() { questionSet.shift(); }, 4975);
            setTimeout(function() { (questionSet[0]).remove(); }, 4950);
            
            $(".guess").css("pointer-events", "none");
            setTimeout(function() {  $(".guess").css("pointer-events", "auto"); }, 4975);
           
            $(".right").css("font-weight", "bold");
           
            
            
            setTimeout(function() { questionSet[0].css("visibility", "visible"); }, 5000);
            
            clearInterval(decrease);
          
            clearInterval(diminish);
            setTimeout(function() { countdown = 15; }, 5000);
            setTimeout(function() { $("#timer").html(countdown); }, 5000);
            setTimeout(function() { clock(); }, 5000);
            
            clearTimeout(expire);
           
            
         
            setTimeout(function() { $(".right").css("font-weight", "normal"); }, 5000);
            
            rightCounter++;
            $("#wins").html(rightCounter);
            counter++;
            clearTimeout(end);
           
            expire =  setTimeout(function() { incorrect(); }, 20000);
    
            if (rightCounter < wrongCounter) {
                $("#you").html("You Lose");
            }
            else if (rightCounter == wrongCounter) {
                $("#you").html("You Tied"); 
            }
            else {
                $("#you").html("You Win!");
            }
    
            if (counter == 10) {
                setTimeout(function() { $("#timer").remove(); }, 5000);
            }
            
        } 
    
       
    
        function go() {
            
            $("#scoreboard").css("visibility", "visible");
            $("#timer").css("visibility", "visible");
            questionSet[0].css("visibility", "visible");
            $("#start").remove();
           
            end = setTimeout(function() { incorrect(); }, 15000);
            
            }
    
        
    
        function incorrect() {
            
            $(".right").css("font-weight", "bold");
            setTimeout(function() { questionSet.shift(); }, 4975);
            setTimeout(function() { (questionSet[0]).remove(); }, 4950);
            $(".guess").css("pointer-events", "none");
            setTimeout(function() {  $(".guess").css("pointer-events", "auto"); }, 4975);
    
    
            setTimeout(function() { questionSet[0].css("visibility", "visible"); }, 5000);
            
            
            clearInterval(decrease);
            clearInterval(diminish);
            setTimeout(function() { countdown = 15; }, 5000);
            setTimeout(function() { $("#timer").html(countdown); }, 5000);
           
            setTimeout(function() { clock(); }, 5000);
            
           
            clearTimeout(expire);
    
            
           
            
            setTimeout(function() { $(".right").css("font-weight", "normal"); }, 5000);
            
            wrongCounter++;
            $("#losses").html(wrongCounter);
            counter++;
            clearTimeout(end);
            
            expire =  setTimeout(function() { incorrect(); }, 20000);
            
            if (rightCounter < wrongCounter) {
                $("#you").html("You Lose");
            }
            else if (rightCounter == wrongCounter) {
                $("#you").html("Tie Game"); 
            }
            else {
                $("#you").html("You Win!");
            }
    
            if (counter == 10) {
                setTimeout(function() { $("#timer").remove(); }, 5000);
            }
            
        }
    });