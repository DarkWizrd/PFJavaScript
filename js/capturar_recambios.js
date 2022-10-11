var infusion_total = 8000
var msj_balance = ""
var msj_turbio = ""
var msj_presion = ""

function capturar_recambios(){

    var select = document.getElementById('tipo_sistemadp')
    var tipo_sistemadp = select.options[select.selectedIndex].value;

    var nombre = document.getElementById("nombre_paciente").value
    var fecha = document.getElementById("fecha_tratamiento").value

    //obtiene datos de presion arterial
    var sist = document.getElementById('sist').value
    var dist = document.getElementById('dist').value
    
    //1 RECAMBIO

    //selección del % de concentración
    var select = document.getElementById('concentracion_1')
    var concentracion_1 = select.options[select.selectedIndex].value;
    
    //obtener el drenaje
    var dr_ml_1 = document.getElementById('dr_ml_1').value

    //sleccion de tipo de cualidad
    var select = document.getElementById('cualidad_1')
    var cualidad_1 = select.options[select.selectedIndex].value;
    
    //introducir dato de balance a la tabla
    document.getElementById('tot_bal_1').textContent=(parseFloat(2000)-parseFloat(dr_ml_1))

    //2 RECAMBIO

    var select = document.getElementById('concentracion_2')
    var concentracion_2 = select.options[select.selectedIndex].value;

    var dr_ml_2 = document.getElementById('dr_ml_2').value

    var select = document.getElementById('cualidad_2')
    var cualidad_2 = select.options[select.selectedIndex].value;
    
    document.getElementById('tot_bal_2').textContent=(parseFloat(2000)-parseFloat(dr_ml_2))

    //3 RECAMBIO

    var select = document.getElementById('concentracion_3')
    var concentracion_3 = select.options[select.selectedIndex].value;

    var dr_ml_3 = document.getElementById('dr_ml_3').value

    var select = document.getElementById('cualidad_3')
    var cualidad_3 = select.options[select.selectedIndex].value;
    
    document.getElementById('tot_bal_3').textContent=(parseFloat(2000)-parseFloat(dr_ml_3))

    //4 RECAMBIO

    var select = document.getElementById('concentracion_4')
    var concentracion_4 = select.options[select.selectedIndex].value;

    var dr_ml_4 = document.getElementById('dr_ml_4').value

    var select = document.getElementById('cualidad_4')
    var cualidad_4 = select.options[select.selectedIndex].value;
    
    document.getElementById('tot_bal_4').textContent=(parseFloat(2000)-parseFloat(dr_ml_4))

    //DRENAJE TOTAL
    drenaje_total = parseFloat(dr_ml_1)+parseFloat(dr_ml_2)+parseFloat(dr_ml_3)+parseFloat(dr_ml_4)
    document.getElementById('drenaje_tot').textContent=(drenaje_total+' ml.')

    //TOTAL BALANCE FINAL
    balance_f = parseFloat(infusion_total)-parseFloat(drenaje_total)
    document.getElementById('tot_bal_final').textContent=(balance_f+' ml.')

    var cualidades = [cualidad_1,cualidad_2,cualidad_3,cualidad_4]
    
    //envian datos a los demas modulos
    condicion_p_arterial(sist,dist)
    alertas(balance_f, cualidades)
    
}