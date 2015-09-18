<?php
// Establish a connection to the database (you need to set the connection parameters in the string).
$dbconn = pg_connect("host=postgres.it.usyd.edu.au port=5432 dbname=y15s1g32 user=y15s1g32 password=ErVhHuj6");

// Get parameters from the query string.
$str = $_SERVER['QUERY_STRING'];
parse_str($str);

$username = ($_GET['username']);
$passwrd = ($_GET['password']);
// Print the vale of the parameters.
#echo "$username\n";
#echo "$passd\n";

// Construct and execute the sql query.
$result = pg_query_params($dbconn, 'SELECT * FROM users WHERE username = $1 and passwrd = $2', array("$username", "$passwrd"));

// Check the result of the query and write appropriate output.
if (pg_fetch_row($result)) {
  echo "success\n";
}
else
{
  echo "invalid\n";
}
?>
