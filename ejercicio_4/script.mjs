/*Ejercicio 4 (extra):
Escriba una función llamada alinearDerecha que tome como argumento dos números
enteros. La función imprimirá el primer número alineado a la derecha en una columna cuya
cantidad de caracteres esté dada por el segundo número.
Por ejemplo, alinearDerecha(192, 8) debe imprimir un string de 8 caracteres, con 5
espacios seguidos por los caracteres "192". alinearDerecha(1546, 6) debe imprimir un
string de 6 caracteres, con 2 espacios en blanco seguidos por los caracteres "1546".
Una vez implementada la función, escriba un pequeño programa que la utilice para imprimir
una lista de números de distinto tamaños en una columna alineada a la izquierda. Por ejemplo:
56
1245
67
6
344535
3556
32
237
Pista: investigue cómo convertir números a strings, para así poder determinar el tamaño en
caracteres de cada número.*/

let numero1 = parseInt(prompt('Escriba el numero:'));
let numero2 = parseInt(prompt('Escriba la la cantidad de caracteres que quiere:'));

function alinearDerecha(numero1, numero2){
    numero2 = numero2.toString();
    
    console.log(numero1 + numero2);
}