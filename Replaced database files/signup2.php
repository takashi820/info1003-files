<?php
  //signup
  if(isset($_POST['username']) && isset($_POST['password'])){
    // Establish a connection to the database (you need to set the connection parameters in the string).
    $dbconn = pg_connect("host=postgres.it.usyd.edu.au port=5432 dbname=y15s1g32 user=y15s1g32 password=ErVhHuj6");
    $name = pg_escape_string($_POST['firstname']);
    $lastname = pg_escape_string($_POST['lastname']);
    $username = pg_escape_string($_POST['username']);
    $password = pg_escape_string($_POST['password']);
    $email = pg_escape_string($_POST['email']);
    //$dob ??????
    // Get parameters from the query string.
    $str = $_SERVER['QUERY_STRING'];
    parse_str($str);

    // Print the vale of the parameters.
    echo "$name\n";
    echo "$lastname\n";
    echo "$username\n";
    echo "$password\n";
    echo "$email\n";

    // Construct and execute the sql query.
    $result = pg_query_params($dbconn, 'INSERT INTO users(firstname, lastname, username, passwrd, email) VALUES($1, $2, $3, $4, $5)', array("$name", "$lastname", "$username", "$password", "$email"));

    //check if inserted
    echo "success";
  }


?>
