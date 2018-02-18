var counter = 0;
   

document.onkeyup = function(event) {
  
    var f = document.getElementById("f").innerHTML;
    var a = document.getElementById("a").innerHTML;
    var r = document.getElementById("r").innerHTML;
    var g = document.getElementById("g").innerHTML;
    var o = document.getElementById("o").innerHTML;
    var k = event.key;
    
    if (k === "f") {
        document.getElementById("f").innerHTML = "F";
        counter++;
        
    }
    else if (k === "a") {
        document.getElementById("a").innerHTML = "a";
        counter++;
        
    }
    else if (k === "r") {
        document.getElementById("r").innerHTML = "r";
        counter++;
        
    }
    else if (k === "g") {
        document.getElementById("g").innerHTML = "g";
        counter++;
        
        
    }
    else if (k === "o") {
        document.getElementById("o").innerHTML = "o";
        counter++;
        
        
    }
    else {
        document.getElementById("incorrect").innerHTML = parseInt(document.getElementById('incorrect').innerHTML) - 1;
        document.getElementById("letters").innerHTML += k;
        
    } 

    }

      document.addEventListener("keypress", gameOver);
function gameOver() {
    
if (document.getElementById("incorrect").innerHTML == 1) {
    document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/MDxEvdICKnw?rel=0&autoplay=1");
    document.getElementById("answer").innerHTML = "Game Over";
}

}

document.addEventListener("keypress", winner);
function winner() {
if (counter == 4) {
    document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/fv9XtSiqEDA?rel=0&autoplay=1");
    document.getElementById("answer").innerHTML = "Fargo";
}  
}