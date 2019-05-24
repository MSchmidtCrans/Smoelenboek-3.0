<?php

header('Content-type: application/json; charset=utf-8');

$servername = "localhost";
$username = "phpdb";
$password = "wachtwoord";

$id = $_POST['id']; 
$myJson = $_POST['myJson'];
$data = json_decode($myJson);


try {
    //connect to DB
    $conn = new PDO("mysql:host=$servername;dbname=myDB", $username, $password);

    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


    $sql = $conn->prepare("UPDATE adressCards SET firstname='$data->firstname', lastname='$data->lastname', 
                            gender='$data->gender', city='$data->city' WHERE id=$id");
    $sql->execute();

    echo(json_encode($data));
    }
    
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }


$conn = null;

?>