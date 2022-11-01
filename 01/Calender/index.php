

<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PHP Calendar</title>
    <link rel="stylesheet" href="calendar.css">
</head>

<body>

    <?php
    include 'calender.php';
    $calender = new Calender(date("Y m d"));
    echo $calender->show();
    ?>
</body>

</html>