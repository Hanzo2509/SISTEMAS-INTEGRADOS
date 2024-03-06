<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

// Inicializar la variable del mensaje de éxito
$mensaje_exito = "";

// Verificar si el formulario ha sido enviado y si es una solicitud POST
if ($_SERVER && isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] == 'POST') {
    // Resto del código para manejar el formulario enviado
    $nombre = isset($_POST["nombre"]) ? $_POST["nombre"] : "";
    $correo = isset($_POST["correo"]) ? $_POST["correo"] : "";
    $telefono = isset($_POST["telefono"]) ? $_POST["telefono"] : "";
    $empresa = isset($_POST["empresa"]) ? $_POST["empresa"] : "";
    $mensaje = isset($_POST["mensaje"]) ? $_POST["mensaje"] : "";

    // Correo de destino
    $correo_destino = "admin@sint.com.mx"; // Reemplaza con tu dirección de correo

    // Asunto del correo
    $asunto = "Nuevo mensaje de contacto desde el formulario";

    // Cuerpo del correo
    $cuerpo_correo = "Nombre y Apellido: $nombre\n";
    $cuerpo_correo .= "Correo Electrónico: $correo\n";
    $cuerpo_correo .= "Teléfono: $telefono\n";
    $cuerpo_correo .= "Empresa: $empresa\n\n";
    $cuerpo_correo .= "Mensaje:\n$mensaje";

    // Cabeceras para el correo
    $cabeceras = "From: $correo\r\n";
    $cabeceras .= "Reply-To: $correo\r\n";

    // Envío del correo
    if (mail($correo_destino, $asunto, $cuerpo_correo, $cabeceras)) {
        // Mensaje de éxito
        echo "success";
    } else {
        // Error al enviar el correo
        echo "error";
    }

    // Detener la ejecución del script aquí
    exit();
}
?>