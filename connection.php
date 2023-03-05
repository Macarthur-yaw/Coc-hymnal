<?php
$servername = "localhost";
$username = "hymns";
$password = "macazzy@8";
$dbname = "Hymns";

// Create a connection to the database
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check if the connection was successful
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Perform a SQL query to retrieve the data from the "hymns" table
$sql = "SELECT * FROM hymns";
$result = mysqli_query($conn, $sql);

// Check if the query was successful
if (!$result) {
    die("Error retrieving data: " . mysqli_error($conn));
}

// Create an empty array to store the data
$data = array();

// Loop through the results and add each row to the data array
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

// Output the data as JSON
header("Content-type: application/json");
echo json_encode($data);

// Close the database connection
mysqli_close($conn);
?>
