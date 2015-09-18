$(document).ready(function () {

    $("#loginForm").validate({
      rules: {
          username: "required",
          password: {
            required: true,
            minlength: 5
          }
      },

      messages: {
          username: "Please enter your username",
          password: {
            required: "Please enter your password",
            minlength: "Your password must be at least 5 characters"
          }
      },

      submitHandler: function(form) {
        var dataPass = $("#loginForm").serialize();
        console.log(dataPass);
    		$.ajax({
    			url : "database/login2.php",
    			type : "GET",
    			data : dataPass,
    			success : function(data) {
    				//data  = JSON.stringify(data);
    				//data = $.trim(data);
    				console.log(data);
    				/* NOTE: the data setting is different to the data parameter of the success setting.
    				The data setting is the data to be passed to the server database.
    				The data parameter is the data that is returned from the server.
    				Look at the console to observe this difference
    				*/


    				/* NOTE: when testing for the data returned, be sure to include a \n escape character for the end of line */

    				/* The output of the script is checked, and a different action (in this case an alert box) is taken depending on the result.*/
    				if (data === "success\n") {
    					alert("You've successfully logged in");
    					window.location.href = "profile.html";
    				}
    				else {
    					alert("Invalid username or password");
    				}
    			}
    		});


        //alert("Successfully logged in. Welcome!");
        //window.location="profile.html" //Change it so that it'll go into profile picture after submitting
        //return false;
      }

    });
});

//Saves vale of username input in localStorage
// Checks if check box is checked. False nothing, True saves username into localStorage
function getUser(){
  var check = document.getElementById("checked").checked;
  if (check == false){
    var user1 = document.getElementById("inputEmail3").value;
    sessionStorage.setItem("user", user1);
  }
  else{
    var user1 = document.getElementById("inputEmail3").value;
    localStorage.setItem("user", user1);
  }


}
