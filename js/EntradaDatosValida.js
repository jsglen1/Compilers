function EntradaDatos(data){
    var t = ((data.length));

    if (data.search(" ") != -1) { // ERROR hay Espacios
        VerAlertNice("!#Error Espacios","error");
        return false;
    } else {
        if (t <= 0) {
            VerAlertNice("!#Error Datos","error"); // Error No hay datos
            return false;
        } else {
            return true; // ok 
        }
    }
}