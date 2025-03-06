let nombre = "Rello";
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1; 
//let palabraVeces = 'vez';
let maximosIntentos = 3; 

alert('Hola' + nombre);
prompt('¿Cuál es el lenguaje de programación que más te gusta?');
while (numeroUsuario != numeroSecreto) {

    if(prompt('¿Cuál es el lenguaje de programación que más te gusta?') == 'javascript') {
        
    }
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 please:"));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdad//Template string OPERADOR TERNARIO //Buenas practicas de programación
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {                                                                        
        if(numeroUsuario > numeroSecreto) {
            alert("el número es menor");
        } else { 
            alert("el número es mayor");
        }
        // venga ya casi te sale
        //intentos = intentos +1;
        //intentos += 1
        intentos++;

        palabraVeces = 'veces';
        if(intentos > maximosIntentos) {
            alert("Llegaste al limite de intentos");
            break;

        }
        //La condición no se cumple
        //alert("No acertaste el número");
    }
    }