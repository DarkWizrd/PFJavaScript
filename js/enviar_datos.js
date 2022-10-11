//EVENTO PARA ENÍO DE DATOS DE FORMULARIO GENERAL
$('#boton1').click((evento)=>{
    
    evento.preventDefault();
    //LLAMADO AL FORMULARIO GENERAL
    let formulario = new FormData(document.getElementById('formulario'));

fetch('registrar.php', {
    method: 'POST',
    body: formulario
})
})

//EVENTO PARA ENÍO DE DATOS DE FORMULARIO DE CITAS
$('#enviar').click((evento)=>{
    
    evento.preventDefault();
    //LLAMADO AL FORMULARIO DE CITAS
    let formulario = new FormData(document.getElementById('form_citas'));
    
fetch('registrar_citas.php', {
    method: 'POST',
    body: formulario
})
})