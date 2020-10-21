function Ejecutar() {
    var data = document.getElementById("text1").value;
    
    if(EntradaDatos(data)){
        if(ValidaExpresion.test(data) == true){
            VerAlertNice(ValidaExpresion.test(data),"success"); // para evitar errores ;v
            VerAlertNice("Correcto","success"); // nice ;v
        }else{
            VerAlertNice("Expresion Invalida","error"); // nope ;v
        }
    }
}

