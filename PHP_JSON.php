<?php

header('Content-type: application/json; charset=utf-8');

$servername = "localhost";
$username = "phpdb";
$password = "wachtwoord";


try {
    //connect to DB
    $conn = new PDO("mysql:host=$servername;dbname=myDB", $username, $password);

    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //Prepare and execute mysql query
    $adressquery = $conn->prepare("SELECT * FROM adressCards");
    $adressquery->execute();

    //Set array
    //$person = array();
    $persons = array();
    
    //Loop through all rows from table
    foreach($adressquery as $item) {   

    //Add person array to persons array (2-dimensional)
    $x = $item[id] - 1;
    $persons[$x] = $item;
    }

    //Sent array as JSON
    echo json_encode($persons);

    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;
?>