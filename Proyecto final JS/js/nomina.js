//Variables basicas de nomina
let smlv=1300000; //salario minimo 2024
let subtte=162000; //subsidio transporte 2024
let Sueldo=0;
let n1=0;
let n2=0;
function liquidar()
{
    //SUELDO BASICO
    let n1=document.getElementById("salario").value;
    let n2=document.getElementById("dias").value;
    Sueldo=parseInt(n1)/30*parseInt(n2);
    document.getElementById("basico").value=Sueldo.toFixed(0);
    //SUBSIDIO TRANSPORTE
    if(n1>=2*smlv)
    {
        subsidiot=0; // no tiene derecho
        document.getElementById("subsidio").value=subsidiot.toFixed(0);
    }else{
        subsidiot=subtte/30*parseInt(n2); // tiene derecho
        document.getElementById("subsidio").value=subsidiot.toFixed(0);
    }
    //RECARGO NOCTURNO
    var nhrn=document.getElementById("hrn").value;
    let vhrn=n1/240*nhrn*1.35; 
    document.getElementById("totrecn").value=vhrn.toFixed(0);
    //TOTAL DEVENGADO
    document.getElementById("totaldev").value=(parseFloat(document.getElementById("basico").value)+parseFloat(document.getElementById("subsidio").value)+parseFloat(document.getElementById("bonif").value)+parseFloat(document.getElementById("totrecn").value)||0).toFixed(0);
    //
    let totaldeve=document.getElementById("totaldev").value;
    //SECCION DE DEDUCCIONES
    //EPS Y PENSION
    let eps00=(totaldeve-subsidiot)*0.04; //EPS
    let pens00=(totaldeve-subsidiot)*0.04; //PENSION
    document.getElementById("eps").value=eps00.toFixed(0);  //visualiza resultado en formulario en input eps
    document.getElementById("pension").value=pens00.toFixed(0); //visualiza resultado en formulario en input pension
    //FONDO DE SOLIDARIDAD
    let fondo=0;
    if(n1>=4*smlv)
    {
        let fondo=totaldeve*0.01;
        document.getElementById("fondos").value=fondo.toFixed(0);
    }else{
        document.getElementById("fondos").value=fondo.toFixed(0);
    }
    //TOTAL DEDUCCIONES
    document.getElementById("totaldedu").value=(parseFloat(document.getElementById("fondos").value)+parseFloat(document.getElementById("prestam").value)+parseFloat(document.getElementById("eps").value)+parseFloat(document.getElementById("pension").value)||0).toFixed(0);
    //
    let totalddc=document.getElementById("totaldedu").value;
    //TOTAL NETO
    let vneto=totaldeve-totalddc;
    document.getElementById("neto").value=vneto.toFixed(0);
}