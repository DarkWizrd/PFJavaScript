function condicion_p_arterial(sist,dist){

    //VARIABLES PARA CONTROL DE VALORES SÍSTOLE, DIÁSTOLE Y MENSAJE
    var mayor = 0
    var sist_val, dist_val
    //LIMPIAR CUADRO DE MENSAJE POR PRESIÓN ARTERIAL ALTA
    document.getElementById("resultado_presion").innerHTML="<td></td>"

    var resultado = document.getElementById("resultado")
    var strong1 = document.createElement("strong")
    var strong2 = document.createElement("strong")

    var mensaje_bld1 = document.createTextNode("ALERTA: ")
    var mensaje_bld2 = document.createTextNode("ATENCIÓN HOSPITALARIA DE INMEDIATO")
    strong1.appendChild(mensaje_bld1)
    strong2.appendChild(mensaje_bld2)


    //CALIFICACIÓN DE NIVEL DE SÍSTOLE
    if(sist >= 80 && sist <= 129){
        sist_val = 1
    }else if(sist >= 130 && sist <= 139){
        sist_val = 2
    }else if(sist >= 140 && sist <= 159){
        sist_val = 3
    }else if(sist >= 160 && sist <= 179){
        sist_val = 4
    }else if(sist >= 180 && sist <= 209){
        sist_val = 5
    }else if(sist >= 210){
        sist_val = 6
    }
    
    //CALIFICACIÓN DE NIVEL DE DIÁSTOLE
    if(dist >= 60 && dist <= 84){
        dist_val = 1
    }else if(dist >= 85 && dist <= 89){
        dist_val = 2
    }else if(dist >= 90 && dist <= 99){
        dist_val = 3
    }else if(dist >= 100 && dist <= 109){
        dist_val = 4
    }else if(dist >= 110 && dist <= 119){
        dist_val = 5
    }else if(dist >= 120){
        dist_val = 6
    }

    //COMPARACIÓN DE NIVEL DE PRESIÓN ARTERIAL
    if(sist_val > dist_val){
        mayor = sist_val
    }else if(dist_val > sist_val){
        mayor = dist_val
    }else{
        mayor = dist_val
    }

    //IMPRESIÓN DE MENSAJE POR NIVEL DE PRESIÓN ARTERIAL
    switch(mayor){
        case 1:
            var mensaje = document.createTextNode("Presión arterial normal.")
            document.getElementById("resultado_presion").appendChild(mensaje)
            
        break;
        case 2:
            var mensaje = document.createTextNode("Presión arterial normal alta: "+ sist +"/"+ dist)
            document.getElementById("resultado_presion").appendChild(mensaje)
            
        break;
        case 3:
            var mensaje = document.createTextNode("Hipertensión leve (Grado 1): "+ sist +"/"+ dist)
            document.getElementById("resultado_presion").appendChild(mensaje)
            
        break;
        case 4:
            var mensaje = document.createTextNode("Hipertensión leve (Grado 2): "+ sist +"/"+ dist)
            document.getElementById("resultado_presion").appendChild(mensaje)
            
        break;
        case 5:
            var mensaje = document.createTextNode("Hipertensión grave (Grado 3). Requiere ")
            document.getElementById("resultado_presion").appendChild(strong1)
            document.getElementById("resultado_presion").appendChild(mensaje)
            document.getElementById("resultado_presion").appendChild(strong2)

            //DECLARACIÓN DE MENSAJE DE ALERTA POR PRESIÓN ALTA
            msj_presion += ("<br><br>Hipertensión grave (Grado 3). Requiere <b>ATENCIÓN HOSPITALARIA DE INMEDIATO.</b>")
            
        alertas_mixtas(msj_presion)
        break;
        case 6:
            var mensaje = document.createTextNode("Hipertensión crítica (Grado 4). Requiere ")
            document.getElementById("resultado_presion").appendChild(strong1)
            document.getElementById("resultado_presion").appendChild(mensaje)
            document.getElementById("resultado_presion").appendChild(strong2)

            //DECLARACIÓN DE MENSAJE DE ALERTA POR PRESIÓN ALTA
            msj_presion = ("<br><br>Hipertensión crítica (Grado 4). Requiere <b>ATENCIÓN HOSPITALARIA DE INMEDIATO.</b>")
            
            //LLAMADO DE FUNCION PARA ALERTAS SOLO POR PRESIÓN ALTA
        alertas_mixtas("","",msj_presion)
        break;
        default:
            console.log("A")
        break;
    }
}