/*Modifique el ejercicio 2 de la Práctica 2 para que utilice una función que reciba como
argumento dos números enteros y retorne verdadero en caso de que el primer número sea
divisible entre el segundo y falso en caso contrario.

Escriba un programa que solicite un número entero positivo al usuario e imprima en la consola
un emoji, siguiendo las siguientes reglas:
● Si el número es divisible entre 3 (pero no entre 5) imprimir el emoji 🚀 junto al número.
● Si el número es divisible entre 5 (pero no entre 3) imprimir el emoji 🍔 junto al número.
● Si el número es divisible entre 3 y entre 5, imprimir el emoji 🍺 junto al número.*/

//numero % numero == 0

let numero1 = parseInt(prompt('Ingrese el valor del primer numero:'));
let numero2 = parseInt(prompt('Ingrese el valor del segundo numero: '));
function numero(numero1, numero2){
    if(numero1 % numero2 == 0 || numero2 % numero1 != 0){
        return true
    }else{
        return false
    }
}
console.log(numero(numero1, numero2));