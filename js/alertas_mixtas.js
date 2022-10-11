function alertas_mixtas(msj_balance, msj_turbio, msj_presion){

    //FUNCIÓN DE ALERTA CHIDA
    Swal.fire({
        icon: 'warning',
        title: 'ALERTA',
        html: msj_balance+msj_turbio+msj_presion,
        allowEscapeKey: true,
        background: '#fff7ec'
    })
}