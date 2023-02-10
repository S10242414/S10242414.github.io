var contact = [];
var temp = [];
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
        
        if (Email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            if(Password == ConfirmPassword){
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
                    temp.push(response[i].username);
                    temp.push(response[i].email);
                    temp.push(response[i].password);
                    contact.push(temp);
                    temp = [];
                    alert("Signed up succesfully!");
                    return true;
                });
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
        
    });
});

