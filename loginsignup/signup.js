var contact = [];
var tempArr = [];
$(document).ready(function () {
    const APIKEY = "63d565e83bc6b255ed0c43c7";
    getdata();
    checkdb();
    
    $("#signup-submit").on("click", function (e) 
    {
        e.preventDefault();
        let loginEmail = $("#signup-email").val();
        let loginPassword = $("#signup-password").val();


        let jsondata = 
        { 
            "username": loginUsername,
            "email": loginEmail,
            "password": loginPassword
        };

        let settings =
        {
            "async": true,
            "crossDomain": true,
            "url": "https://nuirimaa-56ee.restdb.io/rest/users",
            "method": "POST", 
            "headers": 
            {
                "content-type": "application/json",
                "x-apikey": APIKEY,
                "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(jsondata),
            "beforeSend": function()
            {
                $("#signup-form").trigger("reset");
            }
        }

        $.ajax(settings).done(function (response) 
        {
            console.log(response);
            $("#signup-submit").prop( "disabled", false);
        });
        
        if (checkdb() == false)
        {
            alert("Sign in failed");
        }
        else 
        {
            alert("Signed in succesfully!");
            window.location.href = "login.html";
        }
    });


