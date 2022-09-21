let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", function(evento){
    evento.preventDefault();
    let hora= parseInt(document.getElementById("inputHours").value); //cuando son campos que se van a ingresar se les pone el value
    let rate= parseFloat(document.getElementById("inputRate").value);
    let iva = document.getElementById("checkIVA").checked;
    let extras= document.getElementById("inputExtras");
    let cambios= parseInt(document.getElementById("inputCambios").value); //cuando son campos que se van a ingresar se les pone el value
    cambios = (isNaN(cambios)?0:cambios);
    let costosFijos= parseFloat(document.getElementById("inputFijos").value);
    costosFijos = (isNaN(costosFijos)?0:costosFijos);
    let cardText =document.getElementById("cardText");
    let flag = true;
    
    if (isNaN(hora)) {
        document.getElementById("inputHours").style.borderColor = "rgb(255,0,0)";
        flag=false;
    }else{
        document.getElementById("inputHours").value = hora;
        document.getElementById("inputHours").style.borderColor = "rgb(0,250,0)";
        

    }//if

    if (isNaN(rate)) {
        document.getElementById("inputRate").style.borderColor = "rgb(255,0,0)";
        flag=false;
    }else{
        document.getElementById("inputRate").value=rate;
        document.getElementById("inputRate").style.borderColor = "rgb(0,250,0)";
        
    }//if

    if (flag){
    cardText.innerHTML ="$ " + cotizar(hora, rate, iva, extras, cambios, costosFijos).toFixed(2);
   }//if

});

function cotizar(h,r,vat,ex, p, cf) { //tenemos que respetar el horden de las variables
    p /=100; 
    let result = (h*r)*(1+p);
    let i=0;
    do {
        console.log(ex.options[i].selected);
        if (ex.options[i].selected){
            result += parseFloat(ex.options[i].value);
        }//if
        i++;
    } while (i < ex.options.length);
    
    result += cf;
    
    if(vat){
        result *= 1.16;
    
    }//if IVA

    return result;
}//cotizar


/* function cotizar(h,r,vat,ex) { //tenemos que respetar el horden de las variables
    let result = h*r;
    let i=0;
    while (i < ex.options.length) {
        console.log(ex.options[i].selected);
        if (ex.options[i].selected){
            result += parseFloat(ex.options[i].value);
        }//if
        i++;
    }//while
    
    
    if(vat){
        result *= 1.16;
    
    }//if IVA

    return result;
}//cotizar */


/* function cotizar(h,r,vat,ex) { //tenemos que respetar el horden de las variables
    let result = h*r;
    for (let i = 0; i < ex.options.length; i++) {
        console.log(ex.options[i].selected);
        if (ex.options[i].selected){
            result += parseFloat(ex.options[i].value);
        }//if
        
    }//for i
    
    
    if(vat){
        result *= 1.16;
    
    }//if IVA

    return result;
}//cotizar
 */





/* function cotizar(h,r,vat,index) { //tenemos que respetar el horden de las variables
    let result = h*r;
 switch (index) {
       case 1: //diseño grafico
            result += 8000;
             break;
        case 2: //asesoria
            result += 6000;
             break;
        case 3: //ciberseguridad
            result += 15000;
              break;
        default:
              break;
    }//switch
    
    if(vat){
        result *= 1.16;
    
    }//if IVA

    return result;
}//cotizar */


/* function cotizar(h,r,vat,index) { //tenemos que respetar el horden de las variables
    let result = h*r;
    if (index==1){
        result += 8000;
    } else if (index==2) {
        result += 6000;
    } else if (index==3) {
    result += 15000;
     }
    if(vat){
        result *= 1.16;
    
    }//if IVA

    return result;
}//cotizar */

