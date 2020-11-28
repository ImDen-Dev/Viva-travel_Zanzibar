<?php

if (!isset($_POST["name"], $_POST["email"], $_POST["phone"]))
{
    header('Location: ./');
    exit;
}

$from = 'Viva Travel Landing <office@viva-travel.com.ua>';
$to = 'elena.vivatravel@gmail.com';
$subject = 'Viva Landing: Заявка на тур';
$headers = "From: $from\r\n";
$headers .= "Content-type: text/html; charset=\"utf-8\"";

$message = '<div style="color: #e76915; font-weight: bold;">Была оставлена заявка на LP "о.Занзибар" в ' . date('G:i') . "</div><br>\n\n";
$message .= '<div><strong>Имя:</strong> ' . htmlspecialchars(trim($_POST['name'] ?? '')) . "</div>\n";
$message .= '<div><strong>E-mail:</strong> ' . htmlspecialchars(trim($_POST['email'] ?? '')) . "</div>\n";
$message .= '<div><strong>Телефон:</strong> ' . htmlspecialchars(trim($_POST['phone'] ?? '')) . "</div>\n";
$message .= '<div><strong>Сообщение:</strong> <em>' . htmlspecialchars(trim($_POST['modal-text'] ?? '')) . "</em></div>\n";

if (mail("Viva Travel <$to>", $subject, $message, $headers)) {
    header('Location: ./thanks');
} else {
    echo '<p><strong>Произошла ошибка при отправке заявки.</strong></p>';
    echo "<p><strong>Пожалуйста напишите нам напрямую на e-mail: <a href=\"mailto:$to\">$to</a></strong></p>";
}
