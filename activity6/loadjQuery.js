function cargaFichero(idetiqueta,archivoHTML){
    $(document).ready(function() {
        $(idetiqueta).load(archivoHTML, function() {
            console.log('Archivo cargado correctamente');
        });
    });
}



