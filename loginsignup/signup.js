const APIKEY = "63e633c0478852088da6801b"
$(document).ready(function() {
    $("#signupbtn").click(function(e) {
      e.preventDefault();
      var email = $("#email").val();
      var username = $("#username").val();
      var password = $("#password").val();
      var confirmPassword = $("#confirm-password").val();
  
      if (password === confirmPassword) {
        $.ajax({
          type: "POST",
          url: "https://nuirimaa-56ee.restdb.io/rest/users",
          headers: {
            "x-apikey": APIKEY,
            "content-type": "application/json"
          },
          data: JSON.stringify({
            username: username,
            email: email,
            password: password
          }),
          success: function(data) {
            console.log("Successfully signed up!");
          },
          error: function(error) {
            console.log("Error signing up: " + error);
          }
        });
      } else {
        console.log("Password and confirm password do not match");
      }
    });
  });
  