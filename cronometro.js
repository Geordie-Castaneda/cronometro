window.onload = init;

function init(){
    hora=0
    minuto = 0;
    segundo = 0;
    document.getElementById("reloj").innerHTML="00:00:00";
    document.getElementById("boton_parar").addEventListener("click",detenerse);
    document.getElementById("boton_iniciar").addEventListener("click",cronometrar);
    document.getElementById("boton_reiniciar").addEventListener("click",reiniciar);
}         

function escribir(){
    var hora_auxiliar, minuto_auxiliar, segundo_auxiliar;
    segundo++;
    if (segundo>59){
        minuto++;
        segundo=0;
    }
    if (minuto>59){
        hora++;
        minuto=0;
    }
    if (hora>24){
        hora=0;
    }

    if (segundo<10){
        segundo_auxiliar="0"+segundo;
    }else{
        segundo_auxiliar=segundo;
    }
    if (minuto<10){
        minuto_auxiliar="0"+minuto;
    }else{
        minuto_auxiliar=minuto;
    }
    if (hora<10){
        hora_auxiliar="0"+hora;
    }else{
        hora_auxiliar=hora;
    }

    document.getElementById("reloj").innerHTML = hora_auxiliar + ":" + minuto_auxiliar + ":" + segundo_auxiliar; 
}
function detenerse(){
    clearInterval(id);
    document.getElementById("boton_iniciar").addEventListener("click",cronometrar);

}
function reiniciar(){
    clearInterval(id);
    document.getElementById("reloj").innerHTML="00:00:00";
    hora=0;minuto=0;segundo=0;
    document.getElementById("boton_iniciar").addEventListener("click",cronometrar);
}

function cronometrar(){
    escribir();
    id = setInterval(escribir,1000);
    document.getElementById("boton_iniciar").removeEventListener("click",cronometrar);
}