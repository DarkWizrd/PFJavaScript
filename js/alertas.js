function alertas(balance_f, cualidades){
    //LIMPIAR CUADRO DE MENSAJE POR DRENAJE Y CUALIDAD TURBIA
    document.getElementById("resultado_drenaje").innerHTML="<td></td>"
    document.getElementById("resultado_cualidad").innerHTML="<td></td>"

    //VARIABLES PARA CONTROL DE MENSAJES
    var mensaje_correo = ("")
    var mensaje_turbio = ("")

    //CONTEO DE CUALIDAD TURBIO
    var turbio = []
    for(var i=0; i<cualidades.length;i++){
        if(cualidades[i] == "turbio"){
            turbio.push(2)
        }
    }

    //CONTROL DE MENSAJE A IMPRIMIR POR VALOR DE BALANCE FINAL
    if(balance_f<=0){
        var mensaje = document.createTextNode("Balance Hídrico Favorable. Condición normal, no hay retención de líquidos.")
        document.getElementById("resultado_drenaje").appendChild(mensaje)
    }else if(balance_f>=1 && balance_f<=2000){
        var mensaje = document.createTextNode("Retención de líquidos considerable. En caso de presentarse esta situación por más de dos días consecutivos, llame y consulte con la unidad hospitalaria de Diálisis. Balance final del día: "+balance_f)
        document.getElementById("resultado_drenaje").appendChild(mensaje)
    }else if(balance_f>2000){
        var mensaje = document.createTextNode("Consulte de inmediato con su nefrólogo. Balance final del día: "+balance_f)
        var strong = document.createElement("strong")
        var mensaje_bld = document.createTextNode("ALERTA: Excesiva retención de líquidos")
        strong.appendChild(mensaje_bld)
        document.getElementById("resultado_drenaje").appendChild(strong)
        document.getElementById("resultado_drenaje").appendChild(mensaje)

        //MENSAJE PARA EL CORREO
        mensaje_correo += "ALERTA: Excesiva retención de líquidos. Consulte de inmediato con su nefrólogo. Balance final del día: " + balance_f

        //CREACIÓN DE MENSAJE DE ALERTA PARA DESPLEGAR
        msj_balance = ("<b>Excesiva retención de líquidos.</b> Consulte de inmediato con su nefrólogo. Balance final del día: "+balance_f+".")
    }

    if (turbio.length>=2){
        var mensaje = document.createTextNode("Consulte de inmediato con su nefrólo y programe su cita en la unidad de diálisis")
        var strong = document.createElement("strong")
        var mensaje_bld = document.createTextNode("ALERTA: ")
        strong.appendChild(mensaje_bld)
        document.getElementById("resultado_cualidad").appendChild(strong)
        document.getElementById("resultado_cualidad").appendChild(mensaje)

        //MENSAJE ADICIONAL PARA EL CORREO
        mensaje_turbio += "ALERTA: Condición turbia de drenaje."

        //CREACIÓN DE MENSAJE DE ALERTA PARA DESPLEGAR
        msj_turbio = ("<br><br>Consulte de inmediato con su nefrólo y programe su cita en la unidad de diálisis.")

        //ENVÍO DE DATOS PARA EL CORREO
        enviarCorreo(mensaje_correo, mensaje_turbio)

        //LLAMADO DE FUNCION PARA ALERTAS CON TURBIO
        alertas_mixtas(msj_balance, msj_turbio, msj_presion)
    }else if(balance_f>2000){
        enviarCorreo(mensaje_correo, mensaje_turbio)
        //LLAMADO DE FUNCION PARA ALERTAS SIN TURBIO
        alertas_mixtas(msj_balance, msj_turbio, msj_presion)

    }
}