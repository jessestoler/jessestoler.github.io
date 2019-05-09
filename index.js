$(document).ready(function(){
    var i = 0;
    var text = "Jesse Stoler";
    var speed = 250;
    var config = {
        apiKey: "AIzaSyCADxm9fAAZrmo6RhUmbWgN3CY-Wn4RRJA",
        authDomain: "personal-9ea75.firebaseapp.com",
        databaseURL: "https://personal-9ea75.firebaseio.com",
        projectId: "personal-9ea75",
        storageBucket: "",
        messagingSenderId: "557892842323"
      };
      firebase.initializeApp(config);

      var database = firebase.database();
      var saved = database.ref("Saved");
      var db = saved.push();

    $("#about").on("click", bio);
    $("#bioClose").on("click", closeBio);
    $("#blog").on("click", blog);
    $("#blogClose").on("click", closeBlog);
    $("#contact").on("click", contact);
    $("#contactClose").on("click", closeContact);
    $("#contactButton").on("click", sendMessage);
    $("#portfolio").on("click", portfolio);
    $("#portfolioClose").on("click", closePortfolio);
    setTimeout(function() { typeWriter(); }, 2975);
    setTimeout(function() { options(); }, 6975);
    $("#mainMenu").fadeIn(5000);

    function closePortfolio() {
        $("#mainMenu").css("display", "block");
        $("#highlights").css("display", "none");
    }

    function portfolio() {
        $("#mainMenu").css("display", "none");
        $("#highlights").css("display", "block");
        
    }

    function contact() {
        $("#contactForm").css("display", "block");
        $("#person").val("");
        $("#email").val("");
        $("#message").val("");
       

    }

    function closeContact() {
        $("#contactForm").css("display", "none");
    }
 
    function closeBio() {
        $("#bio").css("display", "none");
    }

    function closeBlog() {
        $("#blogIntro").css("display", "none");
    }

    function typeWriter() {
       
        if (i < text.length) {
            document.getElementById("jesse").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    function options() {
        $("h4").css("visibility", "visible");
    }

    function bio() {
        $("#bio").css("display", "block");
    }

    function blog() {
        $("#blogIntro").css("display", "block");
    }

   


 

    
      function sendMessage() {

        if ($("#person").val() == "" || $("#email").val() == "" || $("#message").val() == "") {
            alert("Please fill in every field to continue");
        }
        else {
            
            alert("Message received. Thank you!")
            db.set({
                name: $("#person").val(), 
                email: $("#email").val(),
                message: $("#message").val()
                
              });
              closeContact();
            }
            
            }

    });