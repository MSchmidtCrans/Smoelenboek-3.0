<?php

header('Content-type: application/json; charset=utf-8');

$myJson=$_POST['myJson'];
$dataFields = json_decode($myJson);


$servername = "localhost";
$username = "phpdb";
$password = "wachtwoord";

//echo("test");


try {
    //connect to DB
    $conn = new PDO("mysql:host=$servername;dbname=myDB", $username, $password);

    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $sql = "INSERT INTO adressCards (firstname, lastname, gender, city)
    VALUES ('$dataFields->firstName', '$dataFields->lastName', '$dataFields->gender', '$dataFields->city')";    
    $conn->exec($sql);

    //Return something for the AJAX call to complete
    echo ($datafields);
    }

    catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;

?>