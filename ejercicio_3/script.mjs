/*Modifique el ejercicio 6 de la práctica de repaso para que utilice una función llamada esPrimo
que tome como argumento un número entero y retorne true si el número es primo y falso en
caso contrario.*/

/*Escriba un programa que solicite un número al usuario e imprima en la consola si el
número es primo (solo divisible entre 1 y él mismo) o no.*/

//Ejercicio 6

/*let numero = parseInt(prompt('Digite el numero;'));
let i = 2;
let primo = true;

while( i < numero){
    if(numero % i == 0){
        primo = false;
    } i++
}
if(primo == true){
    console.log('El numero es primo', numero)
}else{
    console.log('El numero no es compuesto', numero)
}*/

let numero = parseInt(prompt('Ingrese el numero:'));
let i = 2;

function esPrimo(numero){
    while( i < numero){
        if(numero % i == 0){
            return false
            }else{
                return true   
            }
    }   
}
console.log(esPrimo(numero));
