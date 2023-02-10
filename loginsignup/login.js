var contact = [];
var tempArr = [];
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
      let loginUsername = $("#login-username").val();
      let loginEmail = $("#login-useremail").val();
      let loginPassword = $("#login-userpass").val();
  
      //get user values when clicks on login
      //Adapted from restdb api
      let jsondata = {
        "username": loginUsername,
        "email": loginEmail,
        "password": loginPassword
      };
      if(login() == true)
      {
          alert("Login successful");
          window.location.href = "index.html"; 
      }
      else
      {
          alert("Login failed");
          console.log("Login Unsuccessful");
          
      }
  }); 
});

function login() 
{
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
        }
    }
    $.ajax(settings).done(function (response) 
    {
        console.log(response);
        for (let i = 0; i < response.length; i++) 
        {
            temp.push(response[i].username);
            temp.push(response[i].email);
            temp.push(response[i].password);
            contact.push(temp);
            temp = [];
        }
        console.log(contact);
        // Check if user credentials are valid
        for (let i = 0; i < contact.length; i++) {
            if ((contact[i][0] == username || contact[i][1] == email) && contact[i][2] == password) {
                console.log("Login successful");
                return true;
            } else {
                console.log("Username/email or password is incorrect");
                return false;
            }
        } 
    });

  }