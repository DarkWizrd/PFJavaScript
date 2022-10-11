function login(){
    var user = document.getElementById('usuario').value
    var pass = document.getElementById('contraseña').value

    //CONTROL DE LOGIN
    if(user == 'usuario_MD' && pass == 'enfermeriadp'){
        window.location = 'captura_datos.html'        
    }else if(user == 'usuario_PD' && pass == 'pacientedp'){
        window.location = 'captura_datos.html'
    }else if(user == 'admin' && pass == 'admin'){
        window.location = 'captura_datos.html'
    }else {
        Swal.fire({
            icon: 'error',
            title: 'Sesión Denegada',
            text: 'Contraseña o usuario incorrectos',
            allowEscapeKey: true,
            background: '#edecff'
        })
    }
}
function verify(){
    //VALIDACIÓN DE CAMPOS OBLIGATORIOS
    if (document.getElementById('nombre_paciente').value==''
    || document.getElementById('fecha_tratamiento').value==''
    || document.getElementById('tipo_sistemadp').value=='Elija un tipo de sistema'
    || 
       document.getElementById("concentracion_1").value=='Elija un porcentaje'
    || document.getElementById("concentracion_2").value=='Elija un porcentaje'
    || document.getElementById("concentracion_3").value=='Elija un porcentaje'
    || document.getElementById("concentracion_4").value=='Elija un porcentaje'
    ||
        document.getElementById("dr_ml_1").value==''
     || document.getElementById("dr_ml_2").value==''
     || document.getElementById("dr_ml_3").value==''
     || document.getElementById("dr_ml_4").value==''
     || 
        document.getElementById("cualidad_1").value=='Elija un tipo'
     || document.getElementById("cualidad_2").value=='Elija un tipo'
     || document.getElementById("cualidad_3").value =='Elija un tipo'
     || document.getElementById("cualidad_4").value =='Elija un tipo'){
        //ALERTA POR FORMULARIO INCOMPLETO
        Swal.fire({
            icon: 'warning',
            title: 'ALERTA',
            text: 'Rellene todos los campos',
            allowEscapeKey: true,
            background: '#edecff'
        })
    }else{
        capturar_recambios()
        
    }
}