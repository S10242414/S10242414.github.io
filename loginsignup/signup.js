//[STEP 0]: Make sure our document is A-OK
$(document).ready(function () {
    //what kind of interface we want at the start 
    const APIKEY = "63d565e83bc6b255ed0c43c7";
    getContacts();
    $("#update-contact-container").hide();
    $("#add-update-msg").hide();
  
    //[STEP 1]: Create our submit form listener
    $("#contact-submit").on("click", function (e) {
      //prevent default action of the button 
      e.preventDefault();
  
      //[STEP 2]: let's retrieve form data
      //for now we assume all information is valid
      //you are to do your own data validation
      let contactName = $("#contact-name").val();
      let contactEmail = $("#contact-email").val();
      let contactPassword = $("#contact-pass").val();
  
      //[STEP 3]: get form values when user clicks on send
      //Adapted from restdb api
      let jsondata = {
        "name": contactName,
        "email": contactEmail,
        "password": contactPassword
      };
  
      //[STEP 4]: Create our AJAX settings. Take note of API key
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://github.com/S10242414/S10242414.github.io.git",
        "method": "POST", //[cher] we will use post to send info
        "headers": {
          "content-type": "application/json",
          "x-apikey": "63d565e83bc6b255ed0c43c7",
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
        "beforeSend": function(){
          //@TODO use loading bar instead
          //disable our button or show loading bar
          $("#contact-submit").prop( "disabled", true);
          //clear our form using the form id and triggering it's reset feature
          $("#add-contact-form").trigger("reset");
        }
      }
  
      //[STEP 5]: Send our ajax request over to the DB and print response of the RESTDB storage to console.
      $.ajax(settings).done(function (response) {
        console.log(response);
        
        $("#contact-submit").prop( "disabled", false);
        
        //@TODO update frontend UI 
        $("#add-update-msg").show().fadeOut(3000);
  
        //update our table 
        getContacts();
      });
    });//end click 
  
  
      //[STEP 7]: Create our AJAX settings
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://github.com/S10242414/S10242414.github.io.git",
        "method": "GET", //[cher] we will use GET to retrieve info
        "headers": {
          "content-type": "application/json",
          "x-apikey": "63d565e83bc6b255ed0c43c7",
          "cache-control": "no-cache"
        },
      }
  

    }//end updateform function
  
  )
  