<?php
    $name = $_POST['name'];
    $carModel = $_POST['carModel'];
    $creationYear = $_POST['creationYear'];
    $carMileage = isset($_POST['carMileage']) ?? '-';
    $gearbox = $_POST['gearbox'];
    $problem = $_POST['problem'];
    $carLocation = $_POST['carLocation'];
    $expectedAmount = isset($_POST['expectedAmount']) ?? '-';
    $phone = $_POST['phone'];

    $subject = "Письмо от клиента с сайта"; 

    $to = "sqwertygfd@yandex.ru";

    $msg = "Имя клиента: $name\n".
        "Марка и модель авто: $carModel\n".
        "Год выпуска: $creationYear\n".
        "Пробег: $carMileage\n".
        "Коробка: $gearbox\n".
        "проблема: $problem\n".
        "Где находится авто: $carLocation\n".
        "Желаемая сумма: $expectedAmount\n".
        "Телефон для связи: $phone";

    if (mail($to, $subject, $msg)) {
        echo "Сообщение отправлено!";
    } else {
        echo "Произошла ошибка при отправке сообщения.";
    }
?>