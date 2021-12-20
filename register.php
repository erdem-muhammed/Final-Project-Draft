<?php

if (isset($_SERVER['HTTP_ORIGIN']))
{
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');
}

$server_name = "localhost";
$server_user = "root";
$server_pass = "";
$database_name = "final_project";

$conn = new mysqli($server_name, $server_user, $server_pass, $database_name);
?>