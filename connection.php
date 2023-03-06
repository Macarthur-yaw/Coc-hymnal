<?php
header("Cache-Control: no-cache, must-revalidate");
$servername = "localhost";
$username = "hymns";
$password = "macazzy@8";
$dbname = "Hymns";


$conn = mysqli_connect($servername, $username, $password, $dbname);


if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$hymnId = $_GET['id'];
$sql = "SELECT * FROM hymns WHERE id =$hymnId";
$result = mysqli_query($conn, $sql);


if (!$result) {
    die("Error retrieving data: " . mysqli_error($conn));
}


$data = array();


while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}


header("Content-type: application/json");
echo json_encode($data);


mysqli_close($conn);
?>
