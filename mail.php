<?php
// Если скрытое поле заполнили
if (isset($_POST[':']) && $_POST[':'] != '') {
    die('No bots!');
} else {
    $to = "das19901990a@gmail.com"; // адрес, на который отправлять письмо
    $subject = "Kushuk dent \r\n У мене біль, передзвоніть!!!\r\n"; // заголовок письма
    $redirect = "./ok.html"; // адрес страницы, на которую нужно перейти после отправки письма

    // Объявление переменной $fields
    $fields = '';

    foreach ($_POST as $key => $value) {
        $fields .= $key . ": " . $value . " \r\n";
    }

    $message = $subject . " \r\n" . $fields;
    $headers = "Content-type: text/plain; charset=utf-8 \r\n";

    // Используйте сторонние библиотеки для отправки почты
    // Пример с использованием PHPMailer:
    // require 'vendor/autoload.php'; // Подключение библиотеки
    // $mail = new PHPMailer\PHPMailer\PHPMailer();
    // ... (настройка объекта $mail)
    // $mail->send();

    // Пока используем mail(), но лучше переходить на более надежные решения
    mail($to, $subject, $message, $headers);

    // Перенаправление после отправки письма
    header('Location: ' . $redirect);
}
?>