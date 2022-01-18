<?php

if(isset($_POST['sendMessage'])){
    $firstName = $_POST['firstName'];
    $phoneNumber = $_POST['phoneNumber'];
    $to = 'webdevproject.business@gmail.com';
    $subject = "T&D Wiadomość z firmowej strony";
    $txt = $_POST['content'];
    $headers = "Od ".$firstName. "\r\n" .
    "Numer kontaktowy ".$phoneNumber;

   echo $phoneNumber;
}
else{
    header('Location: ../index.php');
}