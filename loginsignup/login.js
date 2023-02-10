const APIKEY = "63e633c0478852088da6801b"
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
  
    $.ajax(settings).done(function (response) {
      console.log(response);
      let isUserFound = false;
      for (let i = 0; i < response.length; i++) {
          if (response[i].username === loginUsername || response[i].email === loginEmail && response[i].password === loginPassword) {
              isUserFound = true;
              break;
          } 
      }
      if (isUserFound) {
          alert("Login successful");
      } else {
          alert("Username/email or password is incorrect");
      }
    });
  });
