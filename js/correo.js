function enviarCorreo(mensaje_correo, mensaje_turbio){

    var nombre = document.getElementById('nombre_paciente').value
    var fecha = document.getElementById('fecha_tratamiento').value

    //DEFINICIÓN DE ESTRUCTURA DEL CORREO
    var params = {
        from_name : nombre,
        email_id : "mehostia@gmail.com",
        mensaje_correo : mensaje_correo,
        fecha : fecha,
        mensaje_turbio : mensaje_turbio
    }
    //FUNCIÓN PARA ENVÍO DEL CORREO
    /* emailjs.send("service_zp4ja6c", "template_1owz0x2", params) */
}