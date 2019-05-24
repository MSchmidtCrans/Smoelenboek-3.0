<?php

header('Content-type: application/json; charset=utf-8');

$servername = "localhost";
$username = "phpdb";
$password = "wachtwoord";

$id = $_POST['id']; 



try {
    //connect to DB
    $conn = new PDO("mysql:host=$servername;dbname=myDB", $username, $password);

    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // sql to delete a record
    $sql = "DELETE FROM adressCards WHERE id=$id";

    // use exec() because no results are returned
    $conn->exec($sql);

    //Sent data to finish AJAX call
    echo ("succes");

    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;

?>