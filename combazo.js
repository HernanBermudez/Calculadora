
function calculadora(){

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
}

