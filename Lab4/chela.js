function outp1() {
    let num = window.prompt("Ingresa un número");
    let n1 = "<td>N</td>";
    let n2 = "<td>N^2</td>"
    let n3 = "<td>N^3</td>"
    for (let i = 1; i <= num; i++) {
        n1 += "<td>" + i + "</td>";
        n2 += "<td>" + i * i + "</td>";
        n3 += "<td>" + i * i * i + "</td>";
    }
    let tabla1 = "<table>" + "<tr>" + n1 + "<tr>" + "<tr>" + n2 + "<tr>" + "<tr>" + n3 + "</tr></table>";
    console.log(tabla1);
    document.getElementById("output_p1").innerHTML = tabla1;
}

//problema 2
function sumas(){
    let a = generateRandomInteger(100);
    let b = generateRandomInteger(100);
    let resp = prompt("Cuanto es " + a + "+ "+ b );
    let sum = a+b;
    let result;

    if (sum == resp){
        result="Felicidades, estas en lo correcto";
    }
    else{
        result="Lo siento pero estas mal :(  la respuesta era "+ sum + " y tu pusiste " + resp;

    }
    document.getElementById("ej2").innerHTML=result;

}


function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;

}


// Problema 3


function contador(arreglo){


    let cero=0;
    let pos=0;
    let neg=0;
    let resultado;

    for (let i = 0; i < arreglo.length; i++){
        if (arreglo[i]==0){
            cero+=1;
        }
        else if(arreglo[i]>0){
            pos+=1;
        }
        else{
            neg+=1;
        }
    }

    resultado="tuviste "+ cero + " ceros, "+ pos+" numeros positivos y "+ neg + " numeros negativos";
    document.getElementById("ej3").innerHTML=resultado;
}

let arreglo=[8,5,5,-5,-4,0,0,0,-5,5,8,0];
contador(arreglo);
  

