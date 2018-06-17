$(document).ready(function(){

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

      $("#submit").on("click", contact);
    
      function contact() {
            
            db.set({
                name: $("#name").val(), 
                email: $("#email").val(),
                message: $("#message").val(),
                time: Date.now()
              });
            
            }

    });