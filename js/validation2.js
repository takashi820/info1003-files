$(document).ready(function () {

    $("#signupForm").validate({
      rules: {
          firstname: {
            required: true
          },
          lastname: {
            required:true
          },
          username: {
            required: true //Not the same as other usernames in database
          },
          password: {
            required: true,
            minlength: 5
          },
          confirmpassword: {
            required: true,
            minlength: 5,
            equalTo: "#inputPassword3"
          },
          email: {
            required: true,
            email: true
          },
          confirmemail: {
            required: true,
            email: true,
            equalTo: "#inputEmail3"
          },
          dob: {
            required: true,
            date: true
          }

      },

      messages: {
          firstname:
          {
            required: "Please enter your First Name"
          },
          lastname: {
            required: "Please enter your Last Name"
          },
          username: {
            required: "Please enter a username"
          },
          password: {
            required: "Please enter desired password",
            minlength: "Enter a password longer than 5 characters"
          },
          confirmpassword: {
            required: "Please confirm password",
            minlength: "Enter a password longer than 5 characters",
            equalTo: "Must be the same password"
          },
          email: {
            required: "Please enter your email",
            email: "Please enter valid email"
          },
          confirmemail: {
            required: "Please confirm email",
            email: "Please enter valid email",
            equalTo: "Must be the same email"
          },
          dob: {
            required: "Please enter date",
            date: "Please a valid date"
          }
      },

      submitHandler: function(form) {
      		var dataPass = $("#signupForm").serialize();
      		$.ajax({
      			url : "database/signup2.php",
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
              //
              alert("Thank you for signing up!"); //Change it so that it'll go into profile picture after submitting
              window.location="log-in2.html";
              return false;
      			}
      		});
        }

      });

});




/*$document.ready(function(){

    $(#signupForm).validate({

        rules: {
          firstname: "required",
          lastname: "required",
          password: {
            required: true,
            minlength: 5
          },
          confirmpassword: {
            required: true,
            minlength: 5,
            equalTo: "#inputPassword3"
          },
          email: "required",
          confirmemail: {
            required: true,
            equalTo: "#inputEmail3"
          }




        }


    });

});
*/
