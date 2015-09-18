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
        alert("Thank you for signing up!"); //Change it so that it'll go into profile picture after submitting
        window.location="profile.html";
        return false;
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
