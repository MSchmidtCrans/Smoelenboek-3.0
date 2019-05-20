<?php
$myfile = fopen("testDataSmoelenboek.txt", "r");
$myJson = json_decode(fread($myfile,filesize("testDataSmoelenboek.txt")), FALSE);
echo($myJson);

fclose($myfile);
?>