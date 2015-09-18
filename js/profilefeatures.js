// Initial date and save to localStorage
var d = new Date();
document.getElementById("dates").innerHTML = d;
localStorage.setItem("date", d);

// Click to refresh date
function getDate(){
  var d = new Date();
  document.getElementById("dates").innerHTML = d;
}

// Times visited
document.addEventListener("DOMContentLoaded", function(){
  if (localStorage.pagecount) {
    localStorage.pagecount = parseInt (localStorage.pagecount) + 1;
  }
  else {
    localStorage.pagecount = 1;
  }
  document.getElementById("pageCount").innerHTML = localStorage.pagecount;
});

//Get date from localStorage
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("timevisits").innerHTML = localStorage.getItem("date");
});

//Get username from localStorage
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("username").innerHTML = localStorage.getItem("user");
});

//Jquery code for toggle
$(document).ready(function(){

    $("p.feature").hide();

    // Question 1
    $("#date").click(function(){
        $("#dates").toggle();
    });

    // Question 2
    $("#timevisit").click(function(){
        $("#timevisits").toggle();
    });

    // Question 3
    $("#page").click(function(){
        $("#pageCount").toggle();
    });
});
