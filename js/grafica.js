//Creación de la variable que se usará para crear la gráfica
let myChart = null

function grafica(){
    const infusion = [2000,2000,2000,2000]

    // Llamado a los valores ingresados en la tabla
    let drenaje = [
        document.getElementById('dr_ml_1').value,
        document.getElementById('dr_ml_2').value,
        document.getElementById('dr_ml_3').value,
        document.getElementById('dr_ml_4').value
    ]
    
    //Creación de los elementos para la gráfica
    let ctx = document.getElementById('balanceGrafica')
    const config = {
        type: 'bar',
        data: {
            labels: ['1', '2', '3', '4'],
            datasets: [{
                label: 'Infusión (mililitros)',
                data: [infusion[0],infusion[1],infusion[2],infusion[3]],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Drenaje (mililitros)',
                data: [drenaje[0],drenaje[1],drenaje[2],drenaje[3]],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Balance (mililitros)',
                data: [
                    infusion[0]-drenaje[0],
                    infusion[1]-drenaje[1],
                    infusion[2]-drenaje[2],
                    infusion[3]-drenaje[3]
                ],
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            },
        ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    }
    
    //Creación de la gráfica
    myChart = new Chart(ctx, config)
}

//Función que destruye el canvas donde se almacena la gráfica, para así crear una nueva
function destroyCanvas(){
    myChart.destroy();
}