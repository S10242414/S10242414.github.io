//[STEP 0]: Make sure our document is A-OK
$(document).ready(function () {
    //what kind of interface we want at the start 
    const APIKEY = "63d565e83bc6b255ed0c43c7";
    login();
    $("#update-contact-container").hide();
    $("#add-update-msg").hide();
  
    //[STEP 1]: Create our submit form listener
    $("#login-submit").on("click", function (e) {
      //prevent default action of the button 
      e.preventDefault();
  
      //[STEP 2]: let's retrieve form data
      //for now we assume all information is valid
      //you are to do your own data validation
      let loginUsername = $("#login-username").val();
      let loginEmail = $("#login-useremail").val();
      let loginPassword = $("#login-userpass").val();
  
      //[STEP 3]: get form values when user clicks on send
      //Adapted from restdb api
      let jsondata = {
        "username": loginUsername,
        "email": loginEmail,
        "password": loginPassword
      };
      if(login() == true)
      {
          alert("Login successful");
          console.log(check);
          window.location.href = "index.html"; 
      }
      else
      {
          alert("Login failed");
          console.log("Login Unsuccessful");
          console.log(check);
          
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
            tempArr.push(response[i].username);
            tempArr.push(response[i].email);
            tempArr.push(response[i].password);
            contact.push(tempArr);
            tempArr = [];
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