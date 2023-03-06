<?php
header("Cache-Control: no-cache, must-revalidate");
$servername = "localhost";
$username = "hymns";
$password = "macazzy@8";
$dbname = "Hymns";


$conn = mysqli_connect($servername, $username, $password, $dbname);

$id=$_GET['search'];
$sql="SELECT * FROM hymns WHERE id=$id";

$result=mysqli_query($conn,$sql);





if (!$result) {
   echo "Can not connect";
}


?>
