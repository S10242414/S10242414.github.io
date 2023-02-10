var Username = [];    
var Email = [];
var Password =[];
var ConfirmPassword = [];
$(document).ready(function () {
    const APIKEY = "63d565e83bc6b255ed0c43c7";
    getdata();
    checkdb();
    
    $("#signupbtn").on("click", function (e) 
    {
        e.preventDefault();
        var Username = $("#username").val();    
        var Email = $("#email").val();
        var Password = $("#password").val();
        var ConfirmPassword = $("#confirm-password").val();
        let jsondata = {
            "username": Username,
            "email": Email,
            "password": Password
        };
        let settings ={
            "async": true,
            "crossDomain": true,
            "url": "https://nuirimaa-56ee.restdb.io/rest/users",
            "method": "POST", 
            "headers":{
                "content-type": "application/json",
                "x-apikey": APIKEY,
                "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(jsondata),
        };
        $.ajax(settings).done(function (response) 
        {
            console.log(response);
            $("#sign_up_submit").prop( "disabled", false);
        });
        if (checkdatabase() == false)
        {
            alert("Sign in failed.");
            console.log(authenticate);
        }
        else
        {
            alert("Sign in Successfully.");
            console.log(authenticate);  
            window.location.href = "index.html";
        }
    });

function getdata(){
    let settings = 
    {
        "async": true,
        "crossDomain": true,
        "url": "nuirimaa-56ee.restdb.io",
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
            username.push(response[i].username);
            password.push(response[i].password); 
            email.push(response[i].email);
        }

    })
}
function checkdb(){
        if (Email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            if(Password == ConfirmPassword){
                alert("Signed in succesfully!")
            }
            else{
                alert("Passwords do not match.");
                return false;
            }
        } 
        else {
            alert("Invalid email address.");
            return false;
        }
    }
});

