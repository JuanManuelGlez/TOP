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

function out2(){
    
}


/*
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;

    console.log(getRandomInt)
  }
*/

function sumas(){
    let a = 10;
    let b = 20;
    let resp = prompt("Cuanto es " + a + "+ "+ b );
    let sum = a+b;
    let result;

    if (sum === resp){
        result="Felicidades, estas en lo correcto";
    else{
        result="Usa una calculadora por que no sabes sumar papito, la respuesta era "+ resp;
    }
    }

}

sumas();
  

