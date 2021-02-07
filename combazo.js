var operacion = "";
var todo = document.getElementById("resultado").innerHTML = operacion;
let num1 = 0;
let num2 = 0;
var simbolo = "";

function cero(){
    cerotxt = "0";
    operacion = operacion + cerotxt;
    document.getElementById("resultado").innerHTML = operacion;
}
function uno(){
    unotxt = "1";
    operacion = operacion + unotxt;
    document.getElementById("resultado").innerHTML = operacion;

}
function dos(){
    dostxt = "2";
    operacion = operacion + dostxt;
    document.getElementById("resultado").innerHTML = operacion;
}
function tres(){
    trestxt = "3";
    operacion = operacion + trestxt;
    document.getElementById("resultado").innerHTML = operacion;
}
function cuatro(){
    cuatrotxt = "4";
    operacion = operacion + cuatrotxt;
    document.getElementById("resultado").innerHTML = operacion;
}
function cinco(){
    cincotxt = "5";
    operacion = operacion + cincotxt;
    document.getElementById("resultado").innerHTML = operacion;
}
function seis(){
    seistxt = "6";
    operacion = operacion + seistxt;
    document.getElementById("resultado").innerHTML = operacion;
}
function siete(){
    sietetxt = "7";
    operacion = operacion + sietetxt;
    document.getElementById("resultado").innerHTML = operacion;
}
function ocho(){
    ochotxt = "8";
    operacion = operacion + ochotxt;
    document.getElementById("resultado").innerHTML = operacion;
}
function nueve(){
    nuevetxt = "9";
    operacion = operacion + nuevetxt;
    document.getElementById("resultado").innerHTML = operacion;
}
function borrar(){
    operacion = "";
    document.getElementById("resultado").innerHTML = operacion;
}

function suma(){
    num1 = parseInt(operacion);
    operacion = "";
    simbolo = "+"
}
function resta(){
    num1 = parseInt(operacion);
    operacion = "";
    simbolo = "-"
}
function multi(){
    num1 = parseInt(operacion);
    operacion = "";
    simbolo = "*"
}
function divi(){
    num1 = parseInt(operacion);
    operacion = "";
    simbolo = "/"
}
function igual(){

    if (simbolo === "+"){
        num2 = parseInt(operacion);
        operacion = "";
        var iguala = num1 + num2;
        document.getElementById("resultado").innerHTML = iguala ;
        simbolo = "";
    }
    else if(simbolo === "-"){
        num2 = parseInt(operacion);
        operacion = "";
        var iguala = num1 - num2;
        document.getElementById("resultado").innerHTML = iguala ;
        simbolo = "";
    }
    else if (simbolo === "*"){
        num2 = parseInt(operacion);
        operacion = "";
        var iguala = num1 * num2;
        document.getElementById("resultado").innerHTML = iguala ;
        simbolo = "";
    }
    else if (simbolo === "/"){
        num2 = parseInt(operacion);
        operacion = "";
        var iguala = num1 / num2;   
        document.getElementById("resultado").innerHTML = iguala ;
        simbolo = "";
    }

    
}


/*function calculadora(){

    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);
    
    let operacion = document.getElementById('operadores').value;

    if(operacion === 'suma'){
        document.getElementById('result').value = (num1 + num2); 
    }
    if(operacion === 'resta'){
        document.getElementById('result').value = (num1 - num2); 
    }
    if(operacion === 'multi'){
        document.getElementById('result').value = (num1 * num2); 
    }
    if(operacion === 'divi'){
        document.getElementById('result').value = (num1 / num2); 
    }
}*/



