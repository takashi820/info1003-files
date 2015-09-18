$(document).ready(function () {

    $("#forgotpassForm").validate({
      rules: {
          email: {
            required: true,
            email: true
          }
      },

      messages: {
          email: {
            required: "Please enter your email",
            email: "Please enter valid email"
          }
      },

      submitHandler: function(form) {
        alert("Your new password will be sent to your email shortly!"); //Change it so that it'll go into profile picture after submitting
        window.location="log-in2.html";
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
