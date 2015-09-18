document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("appending").onclick = function() {
        var item1 = document.createElement("li");
        item1.textContent = "Have you tried to check your internet options? You may have inadvertently disabled your cookies?Have you used your account recently? It's possible that your information is no longer available in our systems! If you haven't used your account in years, we recommend you to try and register your email again?";
        document.getElementById("olList").appendChild(item1);
    };

    document.getElementById("prepending").onclick = function() {
      var item1 = document.createElement("li");
      item1.textContent = "Please email us at admin@cvdfree.com";
      var list = document.getElementById("olList");
      list.insertBefore(item1, list.firstchild);
    };

<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("appending").onclick = function() {
      var item1 = document.getElementById("li");
      item.parentNode.removeChild(item);
});

=======
    document.getElementById("prepending").onclick = function() {
      var item1 = document.createElement("li");
      item1.textContent = "Please visit the forgot password page if you cannot access your account because you forgot your password. You need to remember your email and provide it in the requested form. In less than one minute, you'll be receiving an email with instructions on how to reset the password";
      var list = document.getElementById("olList");
      list.insertBefore(item1, list.firstchild);
    };
>>>>>>> 87980e180a2eadcb7df1d4e56ed245780d45d6ff
});
