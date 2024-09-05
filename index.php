<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="js/validate.js"></script>
    <title>Login</title>
</head>
<body>
<form id="loginForm" action="login.php" method="POST" onsubmit="return validateForm()" novalidate class="needs-validation">
    <label for="username">Usuario:</label>
    <input type="text" id="username" name="username" required>
    <br><br>
    <label for="password">Contraseña:</label>
    <input type="password" id="password" name="password" required>
    <br><br>
    <input type="submit" value="Iniciar sesion">
</form>

</body>
</html>