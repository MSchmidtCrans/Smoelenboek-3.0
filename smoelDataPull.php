<?php

header('Content-type: application/json; charset=utf-8');

$myfile = fopen("testDataSmoelenboek.txt", "r");
$myRead = fread($myfile,filesize("testDataSmoelenboek.txt"));

$obj = json_decode($myRead, false);

echo json_encode($obj);
?>