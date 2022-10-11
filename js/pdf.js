function descargar(){
    var doc = new jsPDF();
    var elementHandler = {
        '#ignorePDF': function(element, renderer) {
            return true;
        }
    };
    var source = document.getElementById("XD");
    doc.fromHTML(
        source,
        15,
        15, {
            'width': 160,
            'elementHandlers': elementHandler
        });

    doc.save("Alerta.pdf");
}