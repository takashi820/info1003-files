<?php

  //TO VINCENT:
  /*
  * go to your console when you click sign up to see what values you are getting, right now I have set it up for the username, email, password and name
  *
  */

  //signing up to the website
  if(isset($_GET['username']) && isset($_GET['firstname']) && isset($_GET['email']) && isset($_GET['password'])){
    //get the connection
    $dbconn = pg_connect("host=postgres.it.usyd.edu.au port=5432 dbname=y15s1g32 user=y15s1g32 password=ErVhHuj6");

    /* Getting the variables */
    $firstname = pg_escape_string($_GET['firstname']);
    $lastname = pg_escape_string($_GET['lastname']);
    $username = pg_escape_string($_GET['username']);
    $passd = pg_escape_string($_GET['password']);
    $email = pg_escape_string($_GET['email']);

    if(isset($_GET['radiob2'])){
      //person is a male
      $gender = "Male";
    } else if(isset($_GET['radiob1'])){
      //person is female
      $gender = "Female";
    } else {
      $gender = "Other";
    }
    $dob = ($_GET['dob']);

    $str = $_SERVER['QUERY_STRING'];
    parse_str($str);

    // Construct and execute the sql query.
    $result = pg_query_params($dbconn, 'INSERT INTO users(firstname, lastname, gender, username, passwrd, email, dob) VALUES($1, $2, $3, $4, $5, $6, $7)', array("$firstname", "$lastname", "$gender", "$username", "$passd", "$email", "$dob"));
  }

  //signup
  // if(isset($_POST['username']) && isset($_POST['password'])){
  //   // Establish a connection to the database (you need to set the connection parameters in the string).
  //   $dbconn = pg_connect("host=postgres.it.usyd.edu.au port=5432 dbname=y15s1g32 user=y15s1g32 password=ErVhHuj6");
  //   $name = pg_escape_string($_POST['firstname']);
  //   $lastname = pg_escape_string($_POST['lastname']);
  //   $username = pg_escape_string($_POST['username']);
  //   $password = pg_escape_string($_POST['password']);
  //   $email = pg_escape_string($_POST['email']);
  //   //$dob ??????
  //   // Get parameters from the query string.
  //   $str = $_SERVER['QUERY_STRING'];
  //   parse_str($str);
  //
  //   // Print the vale of the parameters.
  //   echo "$name\n";
  //   echo "$lastname\n";
  //   echo "$username\n";
  //   echo "$password\n";
  //   echo "$email\n";
  //
  //   // Construct and execute the sql query.
  //   $result = pg_query_params($dbconn, 'INSERT INTO users(firstname, lastname, username, passwrd, email) VALUES($1, $2, $3, $4, $5)', array("$name", "$lastname", "$username", "$password", "$email"));
  //
  //   //check if inserted
  //   echo "success";
  // }

  print_r($_GET);


?>
