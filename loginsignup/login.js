var username = [];
var email = [];
var password = [];

function login(loginForm){
    alert("username")
    while(login()==true){
        var loginUsername=document.getElementById("username").value;
        document.write("Welcome"+"");
        document.write("username");
    }
}

$(document).ready(function () {
    const APIKEY = "63d565e83bc6b255ed0c43c7";
    login();
    $("#update-contact-container").hide();
    $("#add-update-msg").hide();
  
    //Create our submit form listener
    $("#login-submit").on("click", function (e) {
      //prevent default action of the button 
      e.preventDefault();
      //retrieve form data
      //for now we assume all information is valid
      //you are to do your own data validation
      let loginUsername = $("#username").val(); 
      let loginEmail = $("#email").val();
      let loginPassword = $("#pass").val();
  
      //get user values when clicks on login
      //Adapted from restdb api
      let jsondata = {
        "username": loginUsername,
        "email":loginEmail,
        "password": loginPassword
      };
      if(login() == true)
      {
          alert("Login successful");
          window.location.href = "index.html"; 
      }
      else
      {
          alert("Login Unsuccessful");
      }
      let settings = 
      {
          "async": true,
          "crossDomain": true,
          "url": "https://nuirimaa-56ee.restdb.io/rest/users",
          "method": "GET",
          "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
          },
          "processData": false,
          "data": JSON.stringify(jsondata),
          "beforeSend": function()
          {
              $("login").trigger("reset");
          }
      }
      $.ajax(settings).done(function (response) 
      {
          console.log(response);
          $("#login-submit").prop( "disabled", false);
      });        
  }); 
});

function login() 
{
    $.ajax(settings).done(function (response) 
    {
        console.log(response);
        for (let i = 0; i < response.length; i++) 
        {
            username.push(response[i].username);
            email.push(response[i].email);
            pass.push(response[i].password);
            // Check if user credentials are valid
            if (contact[i].username == $("#username")||$("#email") && contact[i].password == $("#pass")) {
                alert("Login successful");
                contact = [];
                return true;
            } 
            else {
                alert("Username/email or password is incorrect");
                return false;
            }
        }
    });

  } 