<?php

header('Content-type: application/json; charset=utf-8');

$myJson=$_POST['myJson'];
$dataFields = json_decode($myJson);


$servername = "localhost";
$username = "phpdb";
$password = "wachtwoord";

try {
    //connect to DB
    $conn = new PDO("mysql:host=$servername;dbname=myDB", $username, $password);

    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    //Insert new data to database 
    
    $sql = "INSERT INTO adressCards (firstname, lastname, gender, city)
    VALUES ('$dataFields->firstname', '$dataFields->lastname', '$dataFields->gender', '$dataFields->city')";    
    $conn->exec($sql);

    //Get last inserted record to bounce back to js
    $last_id = $conn->lastInsertId();

    //Prepare and execute mysql query
    $adressquery = $conn->prepare("SELECT * FROM adressCards WHERE id=$last_id");
    $adressquery->execute();

    //Set array to receive record
    $person = array();
    
    //Loop through all rows from table
    foreach($adressquery as $item) {   

    //Add person array
    $person = $item;
    }

    //Sent array as JSON
    echo json_encode($person);
    }

    catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;

?>